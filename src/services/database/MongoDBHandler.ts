import { PrismaClient, TickerHandler } from "@prisma/client";
import pc from "picocolors";
import TickerModel, { TickerFlatData } from "../../models/tickerModel";
import DatabaseHandler from "./DatabaseHandler";

class MongoDBDatabaseHandler extends DatabaseHandler {
  prisma: PrismaClient;

  async init() {
    console.log("Init mongoDb");
    this.prisma = new PrismaClient(
      process.env.DEBUG && {
        log: ["query", "info", "warn", "error"],
      }
    );
    return this;
  }

  async getTicker(ticker: TickerModel["symbol"]): Promise<TickerModel | null> {
    //mongodb get one ticker by id
    const result = await this.prisma.ticker.findFirst({
      where: {
        symbol: ticker,
      },
      include: {
        tickerData: true,
        tickerHandlers: true,
      },
    });

    return new TickerModel(result);
  }

  async getTickerHandlers(tickerId: string): Promise<TickerHandler[] | null> {
    const result = await this.prisma.tickerHandler.findMany({
      where: {
        tickerId: tickerId,
      },
    });

    return result;
  }

  async getTickers(): Promise<TickerModel[] | null> {
    const result = await this.prisma.ticker.findMany({
      include: {
        tickerData: true,
        tickerHandlers: true,
      },
    });

    return result.map((t) => new TickerModel(t));
  }

  async getTickersFlatData(): Promise<TickerFlatData[] | null> {
    const result = await this.getTickers();
    const flat = result.map((item) => {
      let data;
      if (item.tickerData) {
        const { id, tickerId, ...tickerData } = item.tickerData;
        data = tickerData;
      }
      return {
        id: item.id,
        symbol: item.symbol,
        data,
      };
    });

    return flat;
  }

  async getTickersList(): Promise<string[]> {
    //mongodb ticker list table
    const result = await this.prisma.ticker.findMany();

    return result.map((ticker) => ticker.symbol);
  }

  async saveTicker(ticker: TickerModel): Promise<boolean> {
    try {
      if (Object.keys(ticker.tickerData).length < 1)
        throw Error(pc.yellow(`Data was not provider to save [${ticker}]`));

      const { id, tickerId, ...tickerDataWithoutId } = ticker.tickerData;
      const update = this.prisma.ticker.update({
        where: { id: ticker.id },
        data: {
          tickerData: {
            upsert: {
              where: { tickerId: ticker.id },
              update: tickerDataWithoutId,
              create: tickerDataWithoutId,
            },
          },
          tickerHandlers: {
            upsert: {
              where: { tickerId: ticker.id },
              update: {
                handlers: ticker.tickerHandlers.handlers,
              },
              create: { handlers: ticker.tickerHandlers.handlers },
            },
          },
        },
      });

      this.prisma.$transaction([update]);

      console.log(pc.green(`${ticker.symbol} saved`));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default MongoDBDatabaseHandler;
