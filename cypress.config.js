const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: '3grxqc',
    env: {
        staging: 'https://www.ka-stage.tk/',
        production: 'https://www.kidsacademy.mobi/',
    },
    retires: 3,
    e2e: {
        supportFile: false,
        viewportHeight: 1080,
        viewportWidth: 1900,
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});