import TickerModel from "../models/tickerModel";
import { errorWrapper } from "../routes";
import updater from "../services/updater";
import { RouteHanlder } from "../types";

const getTicker: RouteHanlder = (req, res) => {
  errorWrapper(res, async () => {
    let { ticker, key } = req.params as { ticker: string; key: string };

    const tickerModel = new TickerModel(ticker);
    const data = tickerModel.getData();

    if (!data) {
      updater.addTickerToUpdate(ticker);
      res.status(503).send({
        status: "unavailable",
        message: "first load may take a while",
      });
      return;
    }

    const keyData = tickerModel.getKeyData(key);
    if (keyData) {
      return res.status(200).send(keyData);
    }

    return res.status(200).send({
      status: "success",
      ticker,
      data,
    });
  });
};

const getTickers: RouteHanlder = async (_, res) => {
  const tickers = await TickerModel.getTickers();

  return res.status(200).send(tickers ?? []);
};

export default { getTicker, getTickers };
