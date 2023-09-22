import puppeteer from "puppeteer";

class Browser {
  private instance;

  constructor() {
    this.init();
  }

  async init() {
    if (!this.instance) {
      this.instance = await puppeteer.launch({
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

export const browser = new Browser();
