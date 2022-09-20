import { expect } from "chai"
import { loginTo } from "../support/page_objects/login"
import { navigateTo } from "../support/page_objects/navigation"

describe('API request for login', () => {

    it('Login by API call', () => {

        cy.visit('https://www.ka-stage.ml')
        cy.getCookies()

        cy.request({
            url: 'https://www.ka-stage.ml/api/v2/user/login/',
            method: 'POST',
            body: {
                "username": "qa.parent2021@gmail.com",
                "password": "123456QA"
            }
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.equal(200)
        })

        navigateTo.navigateToLearningPage()
        loginTo.checkIsLoggedIn()

    })
})