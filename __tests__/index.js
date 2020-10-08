import { homePageTests } from "./controllers/HomeTests";
import { Login } from "./login";
import Puppet from "./_config/Puppet";
import PuppetMaster from "./_config/PuppetMaster";

const testRunner = new PuppetMaster([
  ...homePageTests.puppets,
  new Puppet(Login),
])

testRunner.run({ headless: false })