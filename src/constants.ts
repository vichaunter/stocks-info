import path from "node:path";

const BASE_PATH = process.cwd();
export const PATHS = {
  base: BASE_PATH,
  data: path.join(BASE_PATH, "data"),
  tickers: path.join(BASE_PATH, "data", "tickers"),
  tickerFile: (ticker: string) =>
    path.join(BASE_PATH, "data", "tickers", `${ticker}.json`),
};
