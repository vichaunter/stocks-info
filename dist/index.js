"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const updater_1 = __importDefault(require("./services/updater"));
const init = async () => {
    await updater_1.default.loadStoredTickers();
    updater_1.default.tickerUpdaterService();
    const app = (0, express_1.default)();
    (0, routes_1.mapRoutes)(app);
    const server = app.listen(4000, () => {
        const { port } = server.address();
        console.log(`Server started on port: http://localhost:${port}`);
    });
    return app;
};
const app = init();
exports.default = app;
