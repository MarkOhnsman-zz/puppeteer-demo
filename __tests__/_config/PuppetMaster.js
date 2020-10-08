import puppeteer from 'puppeteer';
import Puppet from './Puppet';

export default class PuppetMaster {
  /**
   * @param {Puppet[]} puppets 
   */
  constructor(puppets = []) {
    this.puppets = puppets
  }
  /**
   * 
   * @param {puppeteer.LaunchOptions} config 
   */
  async run(config = {}) {
    const browser = await puppeteer.launch(config);
    try {
      for (const p of this.puppets) {
        const page = await browser.newPage();
        await p.run(page)
      }
    } finally {
      await browser.close()
    }
  }
}