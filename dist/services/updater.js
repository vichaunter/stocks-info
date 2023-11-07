"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const tickerModel_1 = __importDefault(require("../models/tickerModel"));
const database_1 = __importDefault(require("./database"));
const scraper_1 = __importDefault(require("./scraper"));
const finviz_1 = __importDefault(require("./scraper/finviz"));
const dividendcom_1 = __importDefault(require("./scraper/dividendcom"));
const dividendmax_1 = __importDefault(require("./scraper/dividendmax"));
const asxcomau_1 = __importDefault(require("./scraper/asxcomau"));
const parsers = {
    finviz: finviz_1.default,
    dividendcom: dividendcom_1.default,
    asxcomau: asxcomau_1.default,
    dividendmax: dividendmax_1.default,
};
const queue = [];
const getTickerData = async (url, parser, browserInstance) => {
    const source = await scraper_1.default.getPageSourceHtml(url, browserInstance);
    const parsed = parser.parser(source);
    console.log(picocolors_1.default.blue(parser.name), picocolors_1.default.green(url));
    console.log(parsed);
    console.log(``);
    return parsed;
};
const updateTicker = async (item) => {
    try {
        const browserInstance = await scraper_1.default.getBrowserInstance();
        process.env.DEBUG &&
            console.log("updateTicker_handlers:", item.tickerHandlers.handlers);
        const promises = item.tickerHandlers.handlers
            .filter((h) => h.enabled) //remove disabled handlers
            .map((handler) => {
            return new Promise(async (resolve, reject) => {
                const parser = parsers?.[handler.id];
                if (!parser || !handler.url)
                    return reject(new Error(`Missing parser or handler url for ${item.symbol}`));
                try {
                    const data = await getTickerData(handler.url, parser, browserInstance);
                    if (data) {
                        return resolve({ key: parser.name, data });
                    }
                    throw Error("Data not found");
                }
                catch (error) {
                    return reject(error);
                }
            });
        });
        const response = await Promise.all(promises.flat());
        if (process.env.DEV)
            return response;
        response.forEach((parsed) => {
            parsed.data && item.setData(parsed.data);
        });
        browserInstance.close();
        const saved = await item.saveTicker();
        if (saved) {
            console.log(picocolors_1.default.green(`${item.symbol} saved`));
        }
        else {
            console.log(picocolors_1.default.red(`${item.symbol} error saving`));
        }
        console.log(`☰☰☰`);
    }
    catch (error) {
        console.log(picocolors_1.default.bgYellow("!! Skipping ticker"), { error });
    }
    return undefined;
};
/**
 * Adds a new ticker to be retrieved
 */
const addTickerToUpdate = async (ticker) => {
    if (queue.find((q) => q.symbol === ticker.symbol))
        return;
    const dbTicker = database_1.default.getTicker(ticker.symbol);
    if (!dbTicker) {
        queue.unshift(ticker);
    }
    else {
        queue.push(ticker);
    }
};
/**
 * Infinite loop that updates all the existing tickers that we
 * know, usually already stored ones or new added by api call
 */
const tickerUpdaterService = async () => {
    // get ticker from the queue removing it
    const nextTicker = queue.shift();
    if (nextTicker?.symbol) {
        console.log(``);
        console.log(picocolors_1.default.white(`----`));
        console.log(picocolors_1.default.blue(`let's update the ticker: ${nextTicker.symbol}`));
        console.log(picocolors_1.default.white(`----`));
        await updateTicker(nextTicker);
        // let's do one each xx seconds
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, (Math.random() * 5 + 10) * 1000);
        });
        // add it again at the end of the queue
        addTickerToUpdate(nextTicker);
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
    //pick older updated first
    tickers.sort((a, b) => a.updatedAt - b.updatedAt);
    console.log("TICKERS", tickers.length);
    tickers.forEach((ticker) => {
        queue.push(ticker);
    });
    // console.log(queue);
    return queue;
};
exports.default = {
    addTickerToUpdate,
    tickerUpdaterService,
    loadStoredTickers,
    updateTicker,
};
