import { mapRoutes } from "./routes";
import express from "express";
import updater from "./services/updater";
import fs from "node:fs";
import { PATHS } from "./constants";

function createDirs() {
  console.log({ PATHS });
  if (!fs.existsSync(PATHS.tickers)) {
    fs.mkdirSync(PATHS.tickers, { recursive: true });
  }
}
createDirs();

const app = express();
mapRoutes(app);
const server = app.listen(4000, async () => {
  const { port } = server.address() as { port: number };
  console.log(`Server started on port: http://localhost:${port}`);

  await updater.loadStoredTickers();
  updater.tickerUpdaterService();
});

export default app;
