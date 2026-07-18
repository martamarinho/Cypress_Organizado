const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4c1999',
  allowCypressEnv: false,

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl:"https://www.automationpratice.com.br/",
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    // implement node event listeners here
    },
  },
});
