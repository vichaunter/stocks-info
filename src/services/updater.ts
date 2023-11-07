import pc from "picocolors";
import TickerModel from "../models/tickerModel";
import database from "./database";
import scraper from "./scraper";
import finviz from "./scraper/finviz";
import dividendcom from "./scraper/dividendcom";
import dividendmax from "./scraper/dividendmax";
import asxcomau from "./scraper/asxcomau";
import { Browser } from "puppeteer";
import dayjs from "dayjs";

type TickerToUpdateHandler = (ticker: TickerModel) => void;
type Parser = {
  name: string;
  parser: (source: string) => Record<string, string | string[]>;
};

export type QueueItem = TickerModel;

const parsers: Record<string, Parser> = {
  finviz,
  dividendcom,
  asxcomau,
  dividendmax,
};
const queue: QueueItem[] = [];

const getTickerData = async (
  url: string,
  parser: Parser,
  browserInstance?: Browser
) => {
  const source = await scraper.getPageSourceHtml(url, browserInstance);
  const parsed = parser.parser(source);

  console.log(parsed, pc.blue(parser.name), pc.green(url));

  return parsed;
};

const updateTicker = async (item: QueueItem) => {
  try {
    const browserInstance = await scraper.getBrowserInstance();

    process.env.DEBUG &&
      console.log("updateTicker_handlers:", item.tickerHandlers.handlers);
    const promises = item.tickerHandlers.handlers
      .filter((h) => h.enabled) //remove disabled handlers
      .map((handler) => {
        return new Promise<{
          key: string;
          data: Record<string, string | string[]>;
        }>(async (resolve, reject) => {
          const parser = parsers?.[handler.id];
          if (!parser || !handler.url)
            return reject(
              new Error(`Missing parser or handler url for ${item.symbol}`)
            );

          try {
            const data = await getTickerData(
              handler.url,
              parser,
              browserInstance
            );
            if (data) {
              return resolve({ key: parser.name, data });
            }
            throw Error("Data not found");
          } catch (error) {
            return reject(error);
          }
        });
      });

    const response = await Promise.all(promises.flat());
    if (process.env.DEV) return response;

    response.forEach((parsed) => {
      parsed.data && item.setData(parsed.data as any);
    });

    browserInstance.close();

    const saved = item.saveTicker();
  } catch (error) {
    console.log(pc.bgYellow("!! Skipping ticker"), { error });
  }

  return undefined;
};

/**
 * Adds a new ticker to be retrieved
 */
const addTickerToUpdate: TickerToUpdateHandler = async (ticker) => {
  if (queue.find((q) => q.symbol === ticker.symbol)) return;

  const dbTicker = database.getTicker(ticker.symbol);
  if (!dbTicker) {
    queue.unshift(ticker);
  } else {
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
    console.log(pc.blue(`let's update the ticker: ${nextTicker.symbol}`));

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
  const tickers = await TickerModel.getTickers();

  //pick older updated first
  tickers.sort((a, b) => (a.updatedAt as any) - (b.updatedAt as any));

  console.log("TICKERS", tickers);

  tickers.forEach((ticker) => {
    queue.push(ticker);
  });

  // console.log(queue);
  return queue;
};

export default {
  addTickerToUpdate,
  tickerUpdaterService,
  loadStoredTickers,
  updateTicker,
};
