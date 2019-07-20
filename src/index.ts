import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://google.com');

  browser.close();
})();
