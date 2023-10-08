import { Ticker } from "@prisma/client";
import pc from "picocolors";
import TickerModel from "../models/tickerModel";
import DatabaseHandler, { DbTickerHandlers } from "./database/DatabaseHandler";
import { handlers } from "./database/index";

class Database {
  handler: DatabaseHandler;

  constructor(handler: DatabaseHandler) {
    this.handler = handler;
  }

  init(): void {
    console.log(pc.blue("db init"));
    this.handler.init();
  }

  async getTicker(ticker: TickerModel["symbol"]): Promise<Ticker | null> {
    return this.handler.getTicker(ticker);
  }

  async getTickers(): Promise<TickerModel[] | null> {
    return this.handler.getTickers();
  }

  async getTickersFlatData() {
    return this.handler.getTickersFlatData();
  }

  async getTickersList(): Promise<string[]> {
    return this.handler.getTickersList();
  }

  async getTickerHandlers(tickerId: string): Promise<DbTickerHandlers[]> {
    return (await this.handler.getTickerHandlers(
      tickerId
    )) as DbTickerHandlers[];
  }

  async saveTicker(ticker: TickerModel): Promise<boolean> {
    return this.handler.saveTicker(ticker);
  }
}

const database = new Database(new handlers[process.env.DB_HANDLER]());

export default database;
