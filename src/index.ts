import { mapRoutes } from "./routes";
import express from "express";
import updater from "./services/updater";
import fs from "node:fs";
import { PATHS } from "./constants";
import database from "./services/database";

database.init();

const app = express();
mapRoutes(app);
const server = app.listen(4000, async () => {
  const { port } = server.address() as { port: number };
  console.log(`Server started on port: http://localhost:${port}`);

  await updater.loadStoredTickers();
  updater.tickerUpdaterService();
});

export default app;
