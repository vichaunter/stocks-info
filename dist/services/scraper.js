"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const picocolors_1 = __importDefault(require("picocolors"));
async function getBrowserInstance() {
    let browserInstance;
    if (!browserInstance) {
        browserInstance = await puppeteer_1.default.launch({
            headless: true,
            args: ["--no-sandbox"],
        });
    }
    return browserInstance;
}
async function getPageSourceHtml(url) {
    const browser = await getBrowserInstance();
    try {
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36");
        await page.goto(url, { waitUntil: "networkidle0" });
        const pageSource = await page.content();
        page.close();
        return pageSource;
    }
    catch (error) {
        console.log(`${picocolors_1.default.red("Error occured:")} ${error.message}`);
    }
    finally {
        await browser.close();
    }
    return;
}
exports.default = {
    getPageSourceHtml,
};
