"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const picocolors_1 = __importDefault(require("picocolors"));
const constants_1 = require("../constants");
const database_1 = __importDefault(require("../services/database"));
const types_1 = require("../types");
class TickerModel {
    constructor(ticker) {
        this.ticker = ticker.toUpperCase();
        return this;
    }
    invalidate() {
        this.data = undefined;
    }
    async getData() {
        if (!this.data) {
            this.data = await database_1.default.getTicker(this.ticker);
        }
        return this.data;
    }
    async getKeyData(key) {
        const data = await this.getData();
        if (!data || !key)
            return;
        const k = Object.keys(data).find((k) => key && data[k][key]);
        if (data[k]?.[key])
            return data[k][key];
        return;
    }
    static async getTickersList(sort) {
        const tickers = await database_1.default.getTickersList();
        return sort ? this.sortByMTime(tickers, sort) : tickers;
    }
    static async getTickers() {
        return database_1.default.getTickers();
    }
    static sortByMTime(tickers, mode = types_1.SortMode.desc) {
        return tickers
            .map((st) => {
            const stats = node_fs_1.default.statSync(node_path_1.default.join(constants_1.PATHS.tickerFile(node_path_1.default.basename(st, node_path_1.default.extname(st)))));
            return {
                ...stats,
                fileName: st,
            };
        })
            .sort((a, b) => mode === types_1.SortMode.desc
            ? (0, date_fns_1.getUnixTime)(a.mtime) - (0, date_fns_1.getUnixTime)(b.mtime)
            : (0, date_fns_1.getUnixTime)(a.mtime) + (0, date_fns_1.getUnixTime)(b.mtime))
            .map((file) => file.fileName);
    }
    setData(data) {
        this.data = data;
        return this;
    }
    saveTicker() {
        try {
            if (this.ticker && this.data) {
                node_fs_1.default.writeFileSync(constants_1.PATHS.tickerFile(this.ticker), JSON.stringify(this.data));
            }
            return true;
        }
        catch (e) {
            console.log(picocolors_1.default.bgRed(`Problem writing file for ticker [${this.ticker}]`), e);
        }
        return false;
    }
}
exports.default = TickerModel;
