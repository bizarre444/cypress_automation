describe('Sorting', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.tk/free-preschool-kindergarten-worksheets/')
    })

    it('Choose the grade', () => {

        //cy.get('a.activity-item__link').first().click()

        cy.get('.learning-resources__filter-list-item')
            .contains('Kindergarten')
            .click()

        cy.wait(15000)

        cy.get('a.activity-item__link').first().click()

        cy.get('a.learning-activity__tags-item')
            .should('contain', 'Kindergarten')

    })
})