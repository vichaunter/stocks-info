"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const database_1 = __importDefault(require("./services/database"));
const updater_1 = __importDefault(require("./services/updater"));
database_1.default.init();
const app = (0, express_1.default)();
(0, routes_1.mapRoutes)(app);
const server = app.listen(4000, async () => {
    const { port } = server.address();
    console.log(`Server started on port: http://localhost:${port}`);
    await updater_1.default.loadStoredTickers();
    updater_1.default.tickerUpdaterService();
    // console.log(await TickerModel.getTickers());
});
exports.default = app;
