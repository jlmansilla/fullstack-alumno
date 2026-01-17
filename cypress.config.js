const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dyvum4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
