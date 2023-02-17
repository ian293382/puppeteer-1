使用 Puppeteer 抓取畫面圖像

Puppeteer 為 Node庫 用來提供高級API 透過DevTools 來控制
無頭Chrome or Chromium。

<!-- 開始 -->

$ mkdir appname
$ cd appname
$ npm init
安裝puppeteer
npm install puppeteer --save or
yarm add puppeteer

% 編輯capit.js
.... js

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