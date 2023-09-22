"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.browser = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
class Browser {
    constructor() {
        this.init();
    }
    async init() {
        if (!this.instance) {
            this.instance = await puppeteer_1.default.launch({
                headless: true,
                args: ["--no-sandbox"],
            });
        }
    }
    async getInstance() {
        if (!this.instance) {
            await this.init();
        }
        return this.instance;
    }
}
exports.browser = new Browser();
