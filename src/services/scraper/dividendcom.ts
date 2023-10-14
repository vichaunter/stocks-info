import { load as cheerioLoad } from "cheerio";
import pc from "picocolors";
import { formatDate, parseDate } from "../../utils";

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
  const cells = $(
    `div.t-flex.t-text-lg.t-font-medium.t-leading-tighter.t-h-5.t-mt-1.t-mb-3.md\\:t-mt-1.md\\:t-mb-1`
    // `.md\\:t-w-2/5 .sm\\:t-mr-4 .t-flex .t-flex-col .t-mr-0 .t-w-full`
  );
  mapped["nextPayDate"] = $(cells[1]).text();

  const nextExtCells = $(`div.t-flex.t-font-medium.t-text-xs.xl\\:t-mb-2`);

  mapped["nextExDate"] = nextExtCells.text().replace("Ex-Date:", "").trim();

  if (mapped["nextPayDate"])
    mapped["nextPayDate"] = formatDate(parseDate(mapped["nextPayDate"]));
  if (mapped["nextExDate"])
    mapped["nextExDate"] = formatDate(parseDate(mapped["nextExDate"]));

  console.log({ mapped });

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
