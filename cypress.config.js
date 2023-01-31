const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    }
  },

  // env: {
  //   "grep" : "regression",
  //   "browser" : "firefox",
  //   "headed" : 'true'
  // }
});
