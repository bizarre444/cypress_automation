export class Login {

    clickLoginButton() {
        cy.get('.navbar__buttons')
            .find('button')
            .eq(1)
            .should('contain', 'Log in')
            .click({ force: true })
    }

    checkModalWindow() {
        cy.get('[data-selector="log-in-modal"]')
            .should('have.css', 'display', 'block')
    }

    loginAction(email, password) {
        cy.get('.family-login-form')
            .find('[data-selector="login-email-input"]')
            .click()
            .type(email, { delay: 300 })
            .parents('.family-login-form')
            .find('[data-selector="login-password-input"]')
            .click()
            .type(password, { delay: 300 })
            .parents('.family-login-form')
            .find('button')
            .contains('Log in')
            .click()
    }

    checkShownErrorMassage() {
        cy.get('[data-selector="parent-login-error"]')
            .should('have.css', 'display', 'block')
    }

    checkSuccessLogin() {
        cy.wait(2000)
        cy.url().should('contain', '/account-settings/#report')
    }

    checkIsLoggedIn() {
        cy.get('.header__notification')
            .find('[data-selector="notification-toggle-btn"]')
            .should('have.css', 'display', 'block')
    }
}

export const loginTo = new Login()