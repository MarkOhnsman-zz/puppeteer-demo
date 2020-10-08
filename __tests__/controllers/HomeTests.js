import PuppetSuite from "../_config/PuppetSuite";

class HomePage extends PuppetSuite {
  constructor() {
    super()
    this.addPuppet(this.fullHomeScreenshot, this.navBarScreenshot, this.formSearch)
  }
  async fullHomeScreenshot(page, test = () => { }) {
    await page.goto('https://www.etsy.com');
    await page.screenshot({ path: 'etsy-home.png', fullPage: true });
  }
  async navBarScreenshot(page, test = () => { }) {
    await page.goto('https://www.etsy.com');
    await page.screenshot({
      path: 'etsy-header.png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 150
      }
    });
  }
  async formSearch(page, test = () => { }) {
    //Go to etsy and wait until the page loads
    await page.goto('https://www.etsy.com', { waitUntil: 'networkidle2' });
    await page.waitForSelector('#global-enhancements-search-query');

    //type the name
    await page.focus('#global-enhancements-search-query')
    await page.keyboard.type('Space Ship');
    //Click on the submit button
    await page.click('#gnav-search > div > div > button')
    //wait for all images to load
    await page.evaluate(async () => {
      const selectors = Array.from(document.querySelectorAll("img"));
      await Promise.all(selectors.map(img => {
        if (img.complete) return;
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      }));
    })
    await page.screenshot({ path: 'etsy-search-result.png', fullPage: true });

  }
}

export const homePageTests = new HomePage();