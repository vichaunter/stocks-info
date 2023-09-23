import TickerModel from "../../models/tickerModel";

abstract class DatabaseHandler {
  handler: DatabaseHandler;

  constructor(handler: DatabaseHandler) {
    this.handler = handler;
  }

  abstract init(): void;

  abstract getTicker(
    ticker: TickerModel["ticker"]
  ): Promise<TickerModel["data"] | undefined>;

  abstract getTickers(): Promise<TickerModel["data"][]>;

  abstract getTickersList(): Promise<string[]>;

  abstract saveTicker(
    ticker: TickerModel["ticker"],
    data: TickerModel["data"]
  ): Promise<boolean>;
}
export default DatabaseHandler;
