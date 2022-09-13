describe('Log in tests', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.ml')
    })

    it('Log in with incorrect creds', () => {

        cy.get('.navbar__buttons')
            .find('button')
            .eq(1)
            .should('contain', 'Log in')
            .click({ force: true })

        cy.get('[data-selector="log-in-modal"]')
            .should('have.css', 'display', 'block')

        cy.get('.family-login-form')
            .find('[data-selector="login-email-input"]')
            .click()
            .type('lala@test.com', { delay: 300 })
            .parents('.family-login-form')
            .find('[data-selector="login-password-input"]')
            .click()
            .type('huhuhu', { delay: 300 })
            .parents('.family-login-form')
            .find('button')
            .contains('Log in')
            .click()

        cy.get('[data-selector="parent-login-error"]')
            .should('have.css', 'display', 'block')

    })

    it('Log in with correct creds', () => {

        cy.get('.navbar__buttons')
            .find('button')
            .eq(1)
            .should('contain', 'Log in')
            .click({ force: true })

        cy.get('[data-selector="log-in-modal"]')
            .should('have.css', 'display', 'block')

        cy.get('.family-login-form')
            .find('[data-selector="login-email-input"]')
            .click()
            .type('qa.parent2021@gmail.com', { delay: 300 })
            .parents('.family-login-form')
            .find('[data-selector="login-password-input"]')
            .click()
            .type('123456QA', { delay: 300 })
            .parents('.family-login-form')
            .find('button')
            .contains('Log in')
            .click()

        cy.wait(2000)
        cy.url().should('contain', '/account-settings/#report')


    })
})