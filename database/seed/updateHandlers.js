// @ts-nocheck
const { PrismaClient } = require("@prisma/client");
const localTickers = require("./tickers.json");
const pc = require("picocolors");
require("dotenv").config();

const getLocalTicker = (symbol) => {
  return localTickers.find((localTicker) => localTicker.symbol === symbol);
};

const seed = async () => {
  const prisma = new PrismaClient();

  let dbTickers = await prisma.ticker.findMany();

  if (!dbTickers) {
    console.log(pc.red(`Ticker not found in database`));
    return;
  }

  for (let i = 0; i < dbTickers.length; i++) {
    const dbTicker = dbTickers[i];
    const localTicker = getLocalTicker(dbTicker.symbol);

    if (!dbTicker || !localTicker)
      return console.log(pc.yellow(`Skip ${dbTicker.symbol}`));

    await prisma.tickerHandler.upsert({
      where: { tickerId: dbTicker.id },
      update: {
        handlers: { set: localTicker.tickerHandlers.handlers },
      },
      create: {
        tickerId: dbTicker.id,
        handlers: { set: localTicker.tickerHandlers.handlers },
      },
    });
    console.log(pc.green(`Saved ticker ${dbTicker.symbol}`));
  }

  return true;
};

seed();
