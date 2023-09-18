import express from "express";
import TickerModel from "./models/tickerModel";
import { mapRoutes } from "./routes";
import database from "./services/database";
import updater from "./services/updater";

database.init();

const app = express();
mapRoutes(app);
const server = app.listen(4000, async () => {
  const { port } = server.address() as { port: number };
  console.log(`Server started on port: http://localhost:${port}`);

  await updater.loadStoredTickers();
  updater.tickerUpdaterService();

  console.log(await TickerModel.getTickers());
});

export default app;
