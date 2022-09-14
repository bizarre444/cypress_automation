export class HeaderRegistration {

    registrationFlow() {
        cy.get('.navbar__buttons')
            .find('[data-locator="sign-up-modal-open-button"]')
            .eq(1)
            .click()

        cy.get('.sign-up-page__parent-next-btn')
            .contains('Go')
            .click()

        cy.get('.kid-profile-create-page__grades-item')
            .find('[data-value="Grade-K"]')
            .click()
        cy.get('.kid-profile-create-page__subjects-item')
            .contains('Reading')
            .click()
        cy.get('.kid-profile-create-page__btns')
            .find('[data-locator="kid-profile-second-step-next-btn"]')
            .click()
        cy.get('[data-selector="kid-profile-third-step-buttons"]')
            .find('[data-locator="kid-profile-third-step-next-btn"]')
            .click()
    }

    checkCorrectUrl() {
        cy.url().should('contain', '/subscription-plans/')
    }
}

export const headerRegistrationTo = new HeaderRegistration()