const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
        BASE_URL: 'https://www.ka-stage.ml/',
    },
    e2e: {
        viewportHeight: 1080,
        viewportWidth: 1900,
        specPattern: 'cypress/e2e/**/*.*.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});