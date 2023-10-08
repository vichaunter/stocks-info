"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const database_1 = __importDefault(require("../services/database"));
class TickerModel {
    constructor(ticker) {
        Object.assign(this, ticker);
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
    async getKeyData(key) {
        const data = await this.getData();
        if (!data || !key)
            return;
        const k = Object.keys(data).find((k) => key && data[k][key]);
        if (data[k]?.[key])
            return data[k][key];
        return;
    }
    async getHandlers() {
        return database_1.default.getTickerHandlers(this.id);
    }
    static async getTickersList(sort) {
        const tickers = await database_1.default.getTickersList();
        return tickers;
        // return sort ? this.sortByMTime(tickers, sort) : tickers;
    }
    static async getTickers() {
        return database_1.default.getTickers();
    }
    static async getTickersFlatData() {
        return database_1.default.getTickersFlatData();
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
    setData(data) {
        this.tickerData = { ...this.tickerData, ...data };
        return this;
    }
    saveTicker() {
        try {
            if (this.symbol && this.id && this.tickerData) {
                database_1.default.saveTicker(this);
            }
            return true;
        }
        catch (e) {
            console.log(picocolors_1.default.bgRed(`Problem writing file for ticker [${this.symbol}]`), e);
        }
        return false;
    }
}
exports.default = TickerModel;
