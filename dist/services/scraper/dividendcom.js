"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const dayjs_1 = __importDefault(require("dayjs"));
const picocolors_1 = __importDefault(require("picocolors"));
const name = "dividend.com";
const baseurl = `https://www.dividend.com`;
const endpoints = {
    ARR: `${baseurl}/stocks/financials/specialty-finance/mortgage-finance/arr-armour-residential-reit-inc/`,
};
const parseDate = (str) => (0, dayjs_1.default)(str, "MMM DD, YYYY").format("DD/MM/YYYY");
const parser = (source) => {
    if (!source) {
        console.log(`${picocolors_1.default.yellow("Missing source skipping...")}`);
        return;
    }
    const $ = (0, cheerio_1.load)(source);
    const rows = [];
    const mapped = {};
    const cells = $(`div.t-flex.t-text-lg.t-font-medium.t-leading-tighter.t-h-5.t-mt-1.t-mb-3.md\\:t-mt-1.md\\:t-mb-1`
    // `.md\\:t-w-2/5 .sm\\:t-mr-4 .t-flex .t-flex-col .t-mr-0 .t-w-full`
    );
    mapped["nextPayDate"] = $(cells[1]).text();
    const nextExtCells = $(`div.t-flex.t-font-medium.t-text-xs.xl\\:t-mb-2`);
    mapped["nextExDate"] = nextExtCells.text().replace("Ex-Date:", "").trim();
    if (mapped["nextPayDate"])
        mapped["nextPayDate"] = parseDate(mapped["nextPayDate"]);
    if (mapped["nextExDate"])
        mapped["nextExDate"] = parseDate(mapped["nextExDate"]);
    console.log({ mapped });
    return mapped;
};
const tickerUrl = (ticker) => `${baseurl}/quote.ashx?t=${ticker}`;
exports.default = {
    endpoints,
    name,
    baseurl,
    tickerUrl,
    parser,
};
