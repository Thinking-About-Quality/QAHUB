const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
  "experimentalSourceRewriting": true,
  "defaultCommandTimeout": 4000,
  "failOnStatusCode": false,
  "chromeWebSecurity": false,
  viewportWidth: 1400,
  viewportHeight: 600,
  e2e: {
 
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          
          launchOptions.args.push("--incognito");
          return launchOptions
        }
        if (browser.name === 'electron') {
          launchOptions.preferences.incognito = true
          return launchOptions
        }
      })
      // implement node event listeners here 
    },
  },
});
