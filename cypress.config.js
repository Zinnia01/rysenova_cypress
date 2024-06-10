const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Set the viewport width and height for your tests
  viewportWidth: 1440,
  viewportHeight: 768,

  // Configure e2e testing options
  e2e: {
    // Enable experimental features
    experimentalRunAllSpecs: true,

    // Set up node event listeners (currently empty)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    // Define the base URL for your tests
    baseUrl: "https://fly.rn-stage-fe.kuiperz.dev/login"
  }
});
