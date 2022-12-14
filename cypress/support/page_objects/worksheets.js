export class Worksheets {

    chooseGrade(grade) {
        cy.get('.learning-resources__filter-list-item')
            .contains(grade)
            .click()
            .wait(5000)
    }

    chooseSubject(subject) {
        cy.get('.learning-resources__filter-list-item-label')
            .contains(subject)
            .click()
            .wait(5000)
    }

    clickFirstCard() {
        cy.get('a.activity-item__link').first().click()
    }

    checkGrade(grade) {
        cy.get('a.learning-activity__tags-item')
            .should('contain', grade)
    }

    checkSubject(subject) {
        cy.get('a.learning-activity__tags-item')
            .should('contain', subject)
    }

    checkGradeAndSubject(grade, subject) {
        cy.get('a.learning-activity__tags-item')
            .should('contain', grade)
            .and('contain', subject)
    }

    checkEmptyText() {
        cy.get('.learning-resources__empty-text')
            .should('contain', 'Sorry, no results match your search.')
    }
}

export const worksheetsSort = new Worksheets()