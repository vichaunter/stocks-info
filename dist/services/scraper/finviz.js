"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const picocolors_1 = __importDefault(require("picocolors"));
const utils_1 = require("../../utils");
const name = "finviz";
const baseurl = `https://finviz.com`;
const validKeys = ["price", "dividend", "dividendYield"];
const parser = (source) => {
    if (!source) {
        console.log(`${picocolors_1.default.yellow("Missing source skipping...")}`);
        return;
    }
    const $ = (0, cheerio_1.load)(source);
    const rows = [];
    const mapped = {};
    $(".screener_snapshot-table-wrapper table  tr").each((i, row) => {
        const rowData = [];
        $(row)
            .find("td")
            .each((j, cell) => {
            rowData.push($(cell).text().trim());
        });
        for (let i = 0; i < rowData.length; i += 2) {
            const key = rowData[i] === "Dividend %" ? "DividendYield" : rowData[i];
            const camelKey = (0, utils_1.camelizeText)(key);
            if (!validKeys.includes(camelKey))
                continue;
            mapped[camelKey] = rowData[i + 1];
        }
        rows.push(rowData);
    });
    return mapped;
};
const tickerUrl = (ticker) => `${baseurl}/quote.ashx?t=${ticker}`;
exports.default = {
    name,
    baseurl,
    tickerUrl,
    parser,
};
