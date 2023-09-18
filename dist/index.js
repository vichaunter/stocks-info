"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tickerModel_1 = __importDefault(require("./models/tickerModel"));
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
    console.log(await tickerModel_1.default.getTickers());
});
exports.default = app;
