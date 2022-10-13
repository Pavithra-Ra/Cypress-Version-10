const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // webpack config goes here if required  return config;
}
module.exports = defineConfig({
  projectId: 'fs2pdt',
  e2e: {
    specPattern:  ["**/*.feature", "cypress/e2e/**/*.cy.{js,tsx}"],
    supportFile: false,
    setupNodeEvents,
  },
  env: {
    UploadURL: "https://the-internet.herokuapp.com"
  },
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  execTimeout: 70000,
  requestTimeout: 6000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    reportFilename: "report",
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },    
});
