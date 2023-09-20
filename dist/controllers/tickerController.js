"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tickerModel_1 = __importDefault(require("../models/tickerModel"));
const routes_1 = require("../routes");
const updater_1 = __importDefault(require("../services/updater"));
const getTicker = (req, res) => {
    (0, routes_1.errorWrapper)(res, async () => {
        let { ticker, key } = req.params;
        const tickerModel = new tickerModel_1.default(ticker);
        const data = await tickerModel.getData();
        if (!data) {
            updater_1.default.addTickerToUpdate(ticker);
            res.status(503).send({
                status: "unavailable",
                message: "first load may take a while",
            });
            return;
        }
        const keyData = key && tickerModel.getKeyData(key);
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
const getTickers = async (_, res) => {
    const tickers = await tickerModel_1.default.getTickers();
    return res.status(200).send(tickers ?? []);
};
exports.default = { getTicker, getTickers };
