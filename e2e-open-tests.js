const cypress = require('cypress')

cypress.open({
    config: {
        baseUrl: 'https://www.ka-stage.tk/'
    },
    env: {
        parent: '/parents'
    },
})