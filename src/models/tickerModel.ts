import { Ticker, TickerData } from "@prisma/client";
import pc from "picocolors";
import database from "../services/database";
import { SortMode } from "../types";
import { DbTickerHandlers } from "../services/database/DatabaseHandler";

export type TickerFlatData = {
  id: string;
  symbol: string;
  data: {
    price: string;
    dividend: string;
    dividendYield: string;
  };
};

class TickerModel {
  id: string; // dbId
  symbol: string;
  updatedAt: Date;
  tickerHandlers: DbTickerHandlers;
  tickerData: TickerData | null = {
    dividend: null,
    dividendYield: null,
    id: null,
    nextExDate: null,
    nextPayDate: null,
    price: null,
    tickerId: null,
  };

  constructor(ticker: Ticker) {
    Object.assign(this, ticker);
    this.updatedAt = new Date(ticker.updatedAt);

    return this;
  }

  invalidate() {
    this.tickerData = undefined;
  }

  async getData() {
    // if (!this.data) {
    //   this.data = await database.getTicker(this.symbol);
    // }

    return this.tickerData;
  }

  async getKeyData(key: string): Promise<string | undefined> {
    const data = await this.getData();
    if (!data || !key) return;

    const k = Object.keys(data).find((k) => key && data[k][key]);
    if (data[k]?.[key]) return data[k][key];

    return;
  }

  async getHandlers(): Promise<any[] | null> {
    return database.getTickerHandlers(this.id);
  }

  static async getTickersList(sort?: SortMode): Promise<string[]> {
    const tickers = await database.getTickersList();

    return tickers;
    // return sort ? this.sortByMTime(tickers, sort) : tickers;
  }

  static async getTickers(): Promise<TickerModel[] | null> {
    return database.getTickers();
  }

  static async getTickersFlatData(): Promise<TickerFlatData[] | null> {
    return database.getTickersFlatData();
  }

  // static sortByMTime(
  //   tickers: TickerModel["symbol"][],
  //   mode: SortMode = SortMode.desc
  // ): string[] {
  //   return tickers
  //     .map((st) => {
  //       const stats = fs.statSync(
  //         path.join(PATHS.tickerFile(path.basename(st, path.extname(st))))
  //       );
  //       return {
  //         ...stats,
  //         fileName: st,
  //       };
  //     })
  //     .sort((a, b) =>
  //       mode === SortMode.desc
  //         ? getUnixTime(a.mtime) - getUnixTime(b.mtime)
  //         : getUnixTime(a.mtime) + getUnixTime(b.mtime)
  //     )
  //     .map((file) => file.fileName);
  // }

  setData(data: TickerModel["tickerData"]) {
    this.tickerData = { ...this.tickerData, ...data };

    return this;
  }

  saveTicker() {
    try {
      if (this.symbol && this.id && this.tickerData) {
        database.saveTicker(this);
      }
      console.log("saved ticker");
      return true;
    } catch (e) {
      console.log(pc.bgRed(`Problem writing ticker [${this.symbol}]`), e);
    }

    return false;
  }
}

export default TickerModel;
