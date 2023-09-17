import puppeteer from "puppeteer";
import pc from "picocolors";

async function getPageSourceHtml(url: string): Promise<string | undefined> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle0" });

    const pageSource = await page.content();

    return pageSource;
  } catch (error) {
    console.log(`${pc.red("Error occured:")} ${error.message}`);
  } finally {
    await browser.close();
  }

  return;
}

export default {
  getPageSourceHtml,
};
