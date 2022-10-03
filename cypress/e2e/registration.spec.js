import { chessRegTo } from "../support/page_objects/chessRegistration"
import { headerRegistrationTo } from "../support/page_objects/headerRegistration"

describe('Registration tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('staging'))
    })

    it('Registration flow from header', () => {

        headerRegistrationTo.registrationFlow()
        headerRegistrationTo.checkCorrectUrl()
    })

    it('Registration flow from chess page', () => {

        chessRegTo.navigateToChessPage()
        chessRegTo.chessRegFlow()
        headerRegistrationTo.checkCorrectUrl()
    })
})