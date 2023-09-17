import { mapRoutes } from "./routes";
import express from "express";
import updater from "./services/updater";

const init = async () => {
  const app = express();

  mapRoutes(app);

  const server = app.listen(4000, () => {
    const { port } = server.address() as { port: number };
    console.log(`Server started on port: http://localhost:${port}`);
  });

  return server;
};

updater.loadStoredTickers();
updater.tickerUpdaterService();
init();