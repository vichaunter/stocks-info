"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const browser_1 = require("./scraper/browser");
async function getPageSourceHtml(url) {
    const browserInstance = await browser_1.browser.getInstance();
    try {
        const page = await browserInstance.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36");
        await page.goto(url, { waitUntil: "networkidle0" });
        const pageSource = await page.content();
        page.close();
        return pageSource;
    }
    catch (error) {
        console.log(`${picocolors_1.default.red("Error occured:")} ${error.message}`);
    }
    return;
}
exports.default = {
    getPageSourceHtml,
};
