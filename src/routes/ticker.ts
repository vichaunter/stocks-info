import fs from "node:fs";
import { errorWrapper } from ".";
import { PATHS } from "../constants";
import updater from "../services/updater";
import { RouteHanlder } from "../types";

const getTicker: RouteHanlder = (req, res) => {
  errorWrapper(res, async () => {
    let { ticker, key } = req.params as { ticker: string; key: string };

    ticker = ticker.toUpperCase();

    const tickerFile = PATHS.tickerFile(ticker);

    if (!fs.existsSync(tickerFile)) {
      updater.addTickerToUpdate(ticker);
      res.status(503).send({
        status: "unavailable",
        message: "first load may take a while",
      });
      return;
    }

    const file = JSON.parse(fs.readFileSync(tickerFile, "utf-8"));

    const k = Object.keys(file).find((k) => key && file[k][key]);
    if (k) {
      return res.status(200).send(file[k][key]);
    }

    return res.status(200).send({
      status: "success",
      ticker,
      data: file,
    });
  });
};

export default { getTicker };
