const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    base
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
