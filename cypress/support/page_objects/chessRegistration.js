export class ChessRegistration {

    navigateToChessPage() {
        cy.visit('https://www.ka-stage.ml/chess-course/')
    }

    chessRegFlow() {
        cy.get('.chess-landing-main__content-left-btn')
            .find('a')
            .click()
            //choose Parent flow
        cy.get('.sign-up-chess__buttons')
            .find('button')
            .contains('Parent')
            .click()
            //type child's name
        cy.get('.sign-up-chess__name')
            .find('input')
            .type('Kira')
            //choose the avatar
        cy.get('.sign-up-chess__avatar-item')
            .eq(3)
            .click()
            //choose the grade
        cy.get('.sign-up-chess__grade-item')
            .eq(1)
            .click()
            //click Next button
        cy.get('.sign-up-chess__buttons')
            .find('button')
            .contains('Next')
            .click()
            //choose the correct answer
        cy.get('.sign-up-chess__level-question')
            .eq(0)
            .find('[for="good-level"]')
            .click()

        cy.get('.sign-up-chess__buttons')
            .find('[data-selector="chess-question-1-step-next-btn"]')
            .click()

        cy.get('.sign-up-chess__cards')
            .eq(0)
            .find('[for="know-knight"]')
            .click()

        cy.get('[data-selector="chess-question-2-step-next-btn"]')
            .click()

        cy.get('[data-selector="chess-last-step-go-to-plans-button"]')
            .click()
    }
}

export const chessRegTo = new ChessRegistration()