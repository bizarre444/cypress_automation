export class Navigation {

    navigateToParentPage() {
        cy.contains('Parents').click()
    }

    navigateToTeacherPage() {
        cy.contains('Educators').click()
    }

    navigateToLearningPage() {
        cy.contains('Learning Resources').click()
    }

    navigateToGiftCardPage() {
        cy.contains('Gift Cards').click()
    }
}

export const navigateTo = new Navigation()