"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const constants_1 = require("../../constants");
const DatabaseHandler_1 = __importDefault(require("./DatabaseHandler"));
class FilesystemDatabaseHandler extends DatabaseHandler_1.default {
    async init() {
        console.log("!!!!!!!!!!!!!!!init");
        if (!node_fs_1.default.existsSync(constants_1.PATHS.tickers)) {
            return !!node_fs_1.default.mkdirSync(constants_1.PATHS.tickers, { recursive: true });
        }
        return true;
    }
    async getTicker(ticker) {
        const tickerFile = constants_1.PATHS.tickerFile(ticker);
        if (!node_fs_1.default.existsSync(tickerFile))
            return;
        return JSON.parse(node_fs_1.default.readFileSync(tickerFile, "utf-8"));
    }
    async getTickers() {
        const list = await this.getTickersList();
        const data = [];
        for (let i = 0; i < list.length; i++) {
            const ticker = list[i];
            const tickerData = await this.getTicker(ticker);
            tickerData && data.push({ ticker, ...tickerData });
        }
        return data;
    }
    async getTickersList() {
        return node_fs_1.default
            .readdirSync(constants_1.PATHS.tickers)
            .filter((st) => node_path_1.default.basename(st) !== ".gitignore")
            .map((filePath) => node_path_1.default.basename(filePath, node_path_1.default.extname(filePath)));
    }
    async saveTicker(ticker, data) {
        try {
            if (Object.keys(data).length < 1)
                throw Error(picocolors_1.default.yellow(`Data was not provider to save [${ticker}]`));
            node_fs_1.default.writeFileSync(constants_1.PATHS.tickerFile(ticker), JSON.stringify(data));
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}
exports.default = FilesystemDatabaseHandler;
