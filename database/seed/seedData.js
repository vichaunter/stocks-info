// @ts-nocheck
const tickers = [
  { symbol: "ABBV" },
  { symbol: "ABT" },
  { symbol: "AGNC" },
  { symbol: "AMGN" },
  { symbol: "AMT" },
  { symbol: "ARI" },
  { symbol: "ARR" },
  { symbol: "BNS" },
  { symbol: "CSCO" },
  { symbol: "CVX" },
  { symbol: "DG" },
  { symbol: "DLR" },
  { symbol: "DUK" },
  { symbol: "DVN" },
  { symbol: "EGP" },
  { symbol: "EPR" },
  { symbol: "EQIX" },
  { symbol: "GBDC" },
  { symbol: "GE" },
  { symbol: "GNL" },
  { symbol: "HASI" },
  { symbol: "HD" },
  { symbol: "HR" },
  { symbol: "IIPR" },
  { symbol: "IRM" },
  { symbol: "JNJ" },
  { symbol: "KO" },
  { symbol: "LLY" },
  { symbol: "LTC" },
  { symbol: "MA" },
  { symbol: "MAIN" },
  { symbol: "MFA" },
  { symbol: "MMM" },
  { symbol: "MO" },
  { symbol: "MSFT" },
  { symbol: "NEE" },
  { symbol: "NLY" },
  { symbol: "NNN" },
  { symbol: "O" },
  { symbol: "OHI" },
  { symbol: "OPI" },
  { symbol: "PEG" },
  { symbol: "PEP" },
  { symbol: "PFE" },
  { symbol: "PG" },
  { symbol: "PLD" },
  { symbol: "PLS" },
  { symbol: "PSA" },
  { symbol: "REFI" },
  { symbol: "REXR" },
  { symbol: "SO" },
  { symbol: "SON" },
  { symbol: "SPG" },
  { symbol: "STAG" },
  { symbol: "T" },
  { symbol: "TRNO" },
  { symbol: "TTE" },
  { symbol: "TWO" },
  { symbol: "UNH" },
  { symbol: "UPS" },
  { symbol: "V" },
  { symbol: "VGR" },
  { symbol: "VICI" },
  { symbol: "VTRS" },
  { symbol: "VZ" },
  { symbol: "WBA" },
  { symbol: "WBC" },
  { symbol: "WELL" },
  { symbol: "WFC" },
  { symbol: "WMT" },
  { symbol: "WPC" },
  { symbol: "XEL" },
];

const getFinvizHandler = (ticker) => ({
  id: "finviz",
  enabled: true,
  url: `https://finviz.com/quote.ashx?t=${ticker}`,
});

const seedData = tickers.map(({ symbol }) => {
  return {
    symbol,
    handlers: [getFinvizHandler(symbol)],
  };
});

module.exports = seedData;
