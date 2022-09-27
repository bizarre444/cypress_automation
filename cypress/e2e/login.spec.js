import { loginTo } from "../support/page_objects/login"

describe('Log in tests', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.tk')
    })

    it('Log in with incorrect creds', () => {

        loginTo.clickLoginButton()
        loginTo.checkModalWindow()
        loginTo.loginAction('lala@test.com', 'huhuhu')
        loginTo.checkShownErrorMassage()

    })

    it('Log in with correct creds', () => {

        loginTo.clickLoginButton()
        loginTo.checkModalWindow()
        loginTo.loginAction('qa.parent2021@gmail.com', '123456QA')
        loginTo.checkSuccessLogin()

    })
})