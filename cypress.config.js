const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yic9jt',
  e2e: {
    baseUrl: 'http://www.automationpratice.com.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
