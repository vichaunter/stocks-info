import fs from "node:fs";
import path from "node:path";
import { PATHS } from "../constants";
import TickerModel from "../models/tickerModel";

class Database {
  async init() {
    if (!fs.existsSync(PATHS.tickers)) {
      return !!fs.mkdirSync(PATHS.tickers, { recursive: true });
    }

    return true;
  }

  async getTicker(
    ticker: TickerModel["ticker"]
  ): Promise<TickerModel["data"] | undefined> {
    const tickerFile = PATHS.tickerFile(ticker);

    if (!fs.existsSync(tickerFile)) return;

    return JSON.parse(fs.readFileSync(tickerFile, "utf-8"));
  }

  async getTickers() {
    const list = await this.getTickersList();
    const data = [];

    for (let i = 0; i < list.length; i++) {
      const ticker = list[i];
      const tickerData = await this.getTicker(ticker);
      tickerData && data.push(tickerData);
    }

    return data;
  }

  async getTickersList() {
    return fs
      .readdirSync(PATHS.tickers)
      .filter((st) => path.basename(st) !== ".gitignore")
      .map((filePath) => path.basename(filePath, path.extname(filePath)));
  }

  async saveTicker(ticker: TickerModel["ticker"], data: TickerModel["data"]) {
    try {
      fs.writeFileSync(PATHS.tickerFile(ticker), JSON.stringify(data));

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

const database = new Database();

export default database;
