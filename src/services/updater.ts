import fs from "node:fs";
import path from "node:path";
import pc from "picocolors";
import { PATHS } from "../constants";
import TickerModel from "../models/tickerModel";
import scraper from "./scraper";
import finviz from "./scraper/finviz";

type TickerToUpdateHandler = (ticker: string) => void;
type Parser = {
  name: string;
  baseurl: string;
  tickerUrl: (ticker: string) => string;
  parser: (source: string) => Record<string, string>;
};

export type QueueItem = {
  ticker: string;
};

const parsers: Parser[] = [finviz];
const queue: QueueItem[] = [];

const getTickerData = async (item: QueueItem, parser: Parser) => {
  const source = await scraper.getPageSourceHtml(parser.tickerUrl(item.ticker));
  const parsed = parser.parser(source);

  console.log(parsed, pc.blue(parser.name), pc.green(item.ticker));

  return parsed;
};

const updateTicker = async (item: QueueItem) => {
  try {
    const promises = parsers.map((parser) => {
      return new Promise<{ key: string; data: Record<string, string> }>(
        async (resolve, reject) => {
          const data = await getTickerData(item, parser);
          if (data) {
            return resolve({ key: parser.name, data });
          }

          return reject();
        }
      );
    });

    const response = await Promise.all(promises);

    const data = {};
    response.forEach((parsed) => {
      data[parsed.key] = parsed.data;
    });

    const ticker = new TickerModel(item.ticker);
    ticker.setData(data);
    const saved = ticker.saveTicker();

    return data;
  } catch (e) {
    // skip current update in any error
    console.log(pc.bgYellow("!! Skipping ticker"));
    console.log(e);
  }

  return undefined;
};

/**
 * Adds a new ticker to be retrieved
 */
const addTickerToUpdate: TickerToUpdateHandler = async (ticker) => {
  ticker = ticker.toUpperCase();
  if (queue.find((q) => q.ticker === ticker)) return;

  const tickerTask = {
    ticker,
  };

  const tickerFile = PATHS.tickerFile(ticker);
  if (!fs.existsSync(tickerFile)) {
    queue.unshift(tickerTask);
  } else {
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
  } else {
    console.log(
      pc.yellow(`${pc.red("!!")}This is an incomplete ticker... deleted`)
    );

    setTimeout(() => {
      tickerUpdaterService();
    }, 60 * 1000);
  }
};

/**
 * Load current stored tickers to be updated from the filesystem
 */
const loadStoredTickers = async () => {
  const tickers = await TickerModel.getTickersList();

  tickers.forEach((ticker) => {
    queue.push({
      ticker,
    });
  });

  console.log(queue);
  return queue;
};

export default {
  addTickerToUpdate,
  tickerUpdaterService,
  loadStoredTickers,
};
