const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.js'
  },
  defaultCommandTimeout: 2000 // Set the default timeout to 2000 milliseconds
});
