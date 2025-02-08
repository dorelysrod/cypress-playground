const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ds46fg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://hyf-react-w2-example.netlify.app/",
  },
});
