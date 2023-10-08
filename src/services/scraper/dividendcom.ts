import { load as cheerioLoad } from "cheerio";
import pc from "picocolors";
import { camelizeText } from "../../utils";

const name = "dividend.com";
const baseurl = `https://www.dividend.com`;
const endpoints = {
  ARR: `${baseurl}/stocks/financials/specialty-finance/mortgage-finance/arr-armour-residential-reit-inc/`,
};

const parser = (source: string): Record<string, string> => {
  if (!source) {
    console.log(`${pc.yellow("Missing source skipping...")}`);
    return;
  }
  const $ = cheerioLoad(source);

  const rows = [];
  const mapped = {};
  $(".snapshot-table-wrapper table  tr").each((i, row) => {
    const rowData = [];
    $(row)
      .find("td")
      .each((j, cell) => {
        rowData.push($(cell).text().trim());
      });

    for (let i = 0; i < rowData.length; i += 2) {
      const key = rowData[i] === "Dividend %" ? "DividendYield" : rowData[i];
      const camelKey = camelizeText(key);
      mapped[camelKey] = rowData[i + 1];
    }
    rows.push(rowData);
  });

  return mapped;
};

const tickerUrl = (ticker: string) => `${baseurl}/quote.ashx?t=${ticker}`;

export default {
  endpoints,
  name,
  baseurl,
  tickerUrl,
  parser,
};
