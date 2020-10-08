const puppeteer = require('puppeteer');

// NOTE Open page, take full page screen shot (headless:false allows chrome to actually open)
// puppeteer.launch({ headless: false }).then(async browser => {
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1280, height: 800 })
//   await page.goto('https://www.etsy.com');
//   await page.screenshot({ path: 'myscreenshot.png', fullPage: true });
//   await browser.close();
// });

// NOTE Targeted ScreenShot
// const options = {
//   path: 'amazon-header.png',
//   fullPage: false,
//   clip: {
//     x: 0,
//     y: 0,
//     width: 1280,
//     height: 150
//   }
// }
// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1280, height: 800 })
//   await page.goto('https://www.amazon.com');
//   await page.screenshot(options);
//   await browser.close();
// });


// NOTE complete a form sumission
// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   //Go to etsy and wait until the page loads
//   await page.goto('https://www.etsy.com', { waitUntil: 'networkidle2' });
//   await page.waitForSelector('#global-enhancements-search-query');

//   //type the name
//   await page.focus('#global-enhancements-search-query')
//   await page.keyboard.type('Space Ship');
//   //Click on the submit button
//   await page.click('#gnav-search > div > div > button')
//   await page.screenshot({ path: 'form.png', fullPage: true });
// })();