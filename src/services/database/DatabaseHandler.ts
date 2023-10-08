import { Ticker, TickerHandler } from "@prisma/client";
import TickerModel, { TickerFlatData } from "../../models/tickerModel";

type Handler = {
  id: string;
  enabled: boolean;
  url: string;
};

export type DbTickerHandlers = {
  id: string;
  tickerId: string;
  handlers: Handler[];
};

abstract class DatabaseHandler {
  abstract init(): void;

  abstract getTicker(ticker: TickerModel["symbol"]): Promise<Ticker | null>;

  abstract getTickerHandlers(tickerId: string): Promise<TickerHandler[] | null>;

  abstract getTickers(): Promise<TickerModel[] | null>;

  abstract getTickersFlatData(): Promise<TickerFlatData[] | null>;

  abstract getTickersList(): Promise<string[]>;

  abstract saveTicker(ticker: TickerModel): Promise<boolean>;
}
export default DatabaseHandler;
