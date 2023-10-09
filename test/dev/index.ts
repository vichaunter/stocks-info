import dotenv from "dotenv";
import path from "node:path";
import database from "../../src/services/database";
import updater from "../../src/services/updater";
import TickerModel from "../../src/models/tickerModel";

dotenv.config({ path: path.join("..", ".env") });
database.init();

async function init() {
  const ticker: TickerModel = new TickerModel({
    id: "1",
    symbol: "O",
  });
  ticker.tickerHandlers = {
    id: "1",
    tickerId: "1",
    handlers: [
      {
        id: "dividendcom",
        enabled: true,
        url: "https://www.dividend.com/stocks/communications/telecommunication/telecom-carriers/vz-verizon/",
      },
    ],
  };

  updater.updateTicker(ticker);
}

init();
