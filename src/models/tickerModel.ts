import { getUnixTime } from "date-fns";
import fs from "node:fs";
import path from "node:path";
import pc from "picocolors";
import { PATHS } from "../constants";
import database from "../services/database";
import { SortMode } from "../types";

class TickerModel {
  ticker: string;
  data: Record<string, string>;

  constructor(ticker: string) {
    this.ticker = ticker.toUpperCase();

    return this;
  }

  invalidate() {
    this.data = undefined;
  }

  async getData(key?: string) {
    if (!this.data) {
      this.data = await database.getTicker(this.ticker);
    }

    return this.data;
  }

  async getKeyData(key: string): Promise<string | undefined> {
    const data = await this.getData();

    const k = Object.keys(data).find((k) => key && data[k][key]);
    if (data[k]?.[key]) return data[k][key];

    return;
  }

  static async getTickers(sort?: SortMode): Promise<string[]> {
    const tickers = await database.getTickersList();

    return sort ? this.sortByMTime(tickers, sort) : tickers;
  }

  static sortByMTime(
    tickers: TickerModel["ticker"][],
    mode: SortMode = SortMode.desc
  ): string[] {
    return tickers
      .map((st) => {
        const stats = fs.statSync(
          path.join(PATHS.tickerFile(path.basename(st, path.extname(st))))
        );
        return {
          ...stats,
          fileName: st,
        };
      })
      .sort((a, b) =>
        mode === SortMode.desc
          ? getUnixTime(a.mtime) - getUnixTime(b.mtime)
          : getUnixTime(a.mtime) + getUnixTime(b.mtime)
      )
      .map((file) => file.fileName);
  }

  setData(data: TickerModel["data"]) {
    this.data = data;

    return this;
  }

  saveTicker() {
    try {
      if (this.ticker && this.data) {
        fs.writeFileSync(
          PATHS.tickerFile(this.ticker),
          JSON.stringify(this.data)
        );
      }

      return true;
    } catch (e) {
      console.log(
        pc.bgRed(`Problem writing file for ticker [${this.ticker}]`),
        e
      );
    }

    return false;
  }
}

export default TickerModel;
