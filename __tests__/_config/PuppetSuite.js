const { default: Puppet } = require("./Puppet")

export default class PuppetSuite {
  puppets = []
  /**
   * 
   * @param {Function} puppet 
   */
  addPuppet(puppet) {
    let p = [...arguments].map(fn => {
      if (typeof fn !== 'function') {
        throw new Error("All puppets must be functions")
      }
      return new Puppet(fn)
    })
    this.puppets.push(...p)
  }
}