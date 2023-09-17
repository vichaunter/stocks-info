"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const updater_1 = __importDefault(require("./services/updater"));
const node_fs_1 = __importDefault(require("node:fs"));
const constants_1 = require("./constants");
function createDirs() {
    console.log({ PATHS: constants_1.PATHS });
    if (!node_fs_1.default.existsSync(constants_1.PATHS.tickers)) {
        node_fs_1.default.mkdirSync(constants_1.PATHS.tickers, { recursive: true });
    }
}
createDirs();
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
