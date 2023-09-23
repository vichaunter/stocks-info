import TickerModel from "../models/tickerModel";
import { handlers } from "./database/index";
import DatabaseHandler from "./database/DatabaseHandler";

class Database extends DatabaseHandler {
  handler: DatabaseHandler;

  init(): void {
    console.log(this.handler);
    this.handler.init();
  }

  async getTicker(
    ticker: TickerModel["ticker"]
  ): Promise<TickerModel["data"] | undefined> {
    return this.handler.getTicker(ticker);
  }

  async getTickers(): Promise<Record<string, string>[]> {
    return this.handler.getTickers();
  }

  async getTickersList(): Promise<string[]> {
    return this.handler.getTickersList();
  }

  async saveTicker(
    ticker: string,
    data: Record<string, string>
  ): Promise<boolean> {
    return this.handler.saveTicker(ticker, data);
  }
}

const database = new Database(new handlers[process.env.DB_HANDLER]());

export default database;
