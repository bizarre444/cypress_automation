import { headerRegistrationTo } from "../support/page_objects/headerRegistration"

describe('Registration tests', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.ml')
    })

    it('Registration flow from header', () => {

        headerRegistrationTo.registrationFlow()
        headerRegistrationTo.checkCorrectUrl()
    })
})