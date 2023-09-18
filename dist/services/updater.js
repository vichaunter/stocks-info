"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const picocolors_1 = __importDefault(require("picocolors"));
const constants_1 = require("../constants");
const tickerModel_1 = __importDefault(require("../models/tickerModel"));
const scraper_1 = __importDefault(require("./scraper"));
const finviz_1 = __importDefault(require("./scraper/finviz"));
const parsers = [finviz_1.default];
const queue = [];
const getTickerData = async (item, parser) => {
    const source = await scraper_1.default.getPageSourceHtml(parser.tickerUrl(item.ticker));
    const parsed = parser.parser(source);
    console.log(parsed, picocolors_1.default.blue(parser.name), picocolors_1.default.green(item.ticker));
    return parsed;
};
const updateTicker = async (item) => {
    try {
        const promises = parsers.map((parser) => {
            return new Promise(async (resolve, reject) => {
                const data = await getTickerData(item, parser);
                if (data) {
                    return resolve({ key: parser.name, data });
                }
                return reject();
            });
        });
        const response = await Promise.all(promises);
        const data = {};
        response.forEach((parsed) => {
            data[parsed.key] = parsed.data;
        });
        const ticker = new tickerModel_1.default(item.ticker);
        ticker.setData(data);
        const saved = ticker.saveTicker();
        return data;
    }
    catch (e) {
        // skip current update in any error
        console.log(picocolors_1.default.bgYellow("!! Skipping ticker"));
        console.log(e);
    }
    return undefined;
};
/**
 * Adds a new ticker to be retrieved
 */
const addTickerToUpdate = async (ticker) => {
    ticker = ticker.toUpperCase();
    if (queue.find((q) => q.ticker === ticker))
        return;
    const tickerTask = {
        ticker,
    };
    const tickerFile = constants_1.PATHS.tickerFile(ticker);
    if (!node_fs_1.default.existsSync(tickerFile)) {
        queue.unshift(tickerTask);
    }
    else {
        queue.push(tickerTask);
    }
};
/**
 * Infinite loop that updates all the existing tickers that we
 * know, usually already stored ones or new added by api call
 */
const tickerUpdaterService = async () => {
    // get ticker from the queue removing it
    const nextTicker = queue.shift();
    if (nextTicker?.ticker) {
        console.log(`let's update the ticker:`, nextTicker.ticker);
        await updateTicker(nextTicker);
        // let's do one each xx seconds
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, (Math.random() * 5 + 10) * 1000);
        });
        // add it again at the end of the queue
        addTickerToUpdate(nextTicker.ticker);
        tickerUpdaterService();
    }
    else {
        console.log(picocolors_1.default.yellow(`${picocolors_1.default.red("!!")}This is an incomplete ticker... deleted`));
        setTimeout(() => {
            tickerUpdaterService();
        }, 60 * 1000);
    }
};
/**
 * Load current stored tickers to be updated from the filesystem
 */
const loadStoredTickers = async () => {
    const tickers = await tickerModel_1.default.getTickers();
    tickers.forEach((ticker) => {
        queue.push({
            ticker,
        });
    });
    console.log(queue);
    return queue;
};
exports.default = {
    addTickerToUpdate,
    tickerUpdaterService,
    loadStoredTickers,
};
