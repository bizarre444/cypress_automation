const cypress = require('cypress')

cypress.run({
    reporter: 'junit',
    browser: 'chrome',
    config: {
        baseUrl: 'https://www.ka-stage.tk/',
        video: true,
    },
    env: {
        parent: '/parents'
    }
})