"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const _1 = require(".");
const constants_1 = require("../constants");
const updater_1 = __importDefault(require("../services/updater"));
const getTicker = (req, res) => {
    (0, _1.errorWrapper)(res, async () => {
        let { ticker, key } = req.params;
        ticker = ticker.toUpperCase();
        const tickerFile = constants_1.PATHS.tickerFile(ticker);
        if (!node_fs_1.default.existsSync(tickerFile)) {
            updater_1.default.addTickerToUpdate(ticker);
            res.status(503).send({
                status: "unavailable",
                message: "first load may take a while",
            });
            return;
        }
        const file = JSON.parse(node_fs_1.default.readFileSync(tickerFile, "utf-8"));
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
exports.default = { getTicker };
