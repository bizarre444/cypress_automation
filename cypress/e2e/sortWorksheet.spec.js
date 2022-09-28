import { worksheetsSort } from "../support/page_objects/worksheets"

describe('Sorting', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.tk/free-preschool-kindergarten-worksheets/')
    })

    it('Choose the grade', () => {

        worksheetsSort.chooseGrade('Kindergarten')
        worksheetsSort.clickFirstCard()
        worksheetsSort.checkGrade('Kindergarten')

    })

    it('Choose the subject', () => {

        worksheetsSort.chooseSubject('Chess')
        worksheetsSort.clickFirstCard()
        worksheetsSort.checkSubject('Chess')

    })

    it('Choose grade and subject', () => {

        worksheetsSort.chooseGrade('Grade 1')
        worksheetsSort.chooseSubject('Writing')
        worksheetsSort.clickFirstCard()
        worksheetsSort.checkGradeAndSubject('Grade 1', 'Writing')

    })
})