export default class Puppet {
  constructor(test) {
    this.test = test
  }
  async run(page, test = () => { }) {
    try {
      await this.test(page, test)
    } finally {
      await page.close();
    }
  }
}