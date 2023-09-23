"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./database/index");
const DatabaseHandler_1 = __importDefault(require("./database/DatabaseHandler"));
class Database extends DatabaseHandler_1.default {
    init() {
        console.log(this.handler);
        this.handler.init();
    }
    async getTicker(ticker) {
        return this.handler.getTicker(ticker);
    }
    async getTickers() {
        return this.handler.getTickers();
    }
    async getTickersList() {
        return this.handler.getTickersList();
    }
    async saveTicker(ticker, data) {
        return this.handler.saveTicker(ticker, data);
    }
}
const database = new Database(new index_1.handlers[process.env.DB_HANDLER]());
exports.default = database;
