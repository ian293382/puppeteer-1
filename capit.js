const puppeteer = require("puppeteer");
const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
    width: 1280,
    height: 800
})

  await page.goto('https://www.pixiv.net/')
  await page.screenshot({
	path: 'mypic.png',
	fullpage: true
})

  await browser.close();
};

run();

