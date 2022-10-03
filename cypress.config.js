const { defineConfig } = require("cypress");

//-->maybe i need to delete this
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('..', 'config', `${file}.json`)

    return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
        // accept a configFile value or use development by default
        const file = config.env.configFile || 'development'

        return getConfigurationByFile(file)
    }
    //--> end of part

module.exports = defineConfig({
    projectId: '46o48c',
    env: {
        staging: 'https://www.ka-stage.tk/',
        production: 'https://www.kidsacademy.mobi/',
    },
    retires: 3,
    e2e: {
        viewportHeight: 1080,
        viewportWidth: 1900,
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});