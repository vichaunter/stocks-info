const fs = require("node:fs");
const path = require("node:path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const saveDbToLocal = async () => {
  const tickers = await prisma.ticker.findMany({
    include: {
      tickerData: true,
      tickerHandlers: {
        include: {
          ticker: true,
        },
      },
    },
  });

  fs.writeFile(
    path.join(__dirname, "dbDump.json"),
    JSON.stringify(tickers),
    (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log("Data saved to updatedTickers.json");
      }
    }
  );
};

module.exports = {
  saveDbToLocal,
};
