import { worksheetsSort } from "../support/page_objects/worksheets"

describe('Sorting', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('staging') + 'free-preschool-kindergarten-worksheets/')
    })

    const grades = ['Preschool', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3']
    const subjects = ['Alphabet', 'Math', 'Writing', 'Reading', 'Games', 'Chess', 'Nursery Rhymes', 'Social Studies', 'Science']

    for (let i = 0; i < grades.length; i++) {
        it(`Choose the grade ${grades[i]} `, () => {

            worksheetsSort.chooseGrade(grades[i])
            worksheetsSort.clickFirstCard()
            worksheetsSort.checkGrade(grades[i])

        })
    }

    for (let i = 0; i < subjects.length; i++) {
        it(`Choose the subject ${subjects[i]}`, () => {

            worksheetsSort.chooseSubject(subjects[i])
            worksheetsSort.clickFirstCard()
            worksheetsSort.checkSubject(subjects[i])

        })
    }

    for (let i = 0; i < grades.length; i++) {
        for (let j = 0; j < subjects.length; j++) {
            it(`Choose the grade ${grades[i]} and the subject ${subjects[j]}`, () => {

                if (subjects[j] == 'Chess' && grades[i] !== 'Grade 1') {
                    worksheetsSort.chooseGrade(grades[i])
                    worksheetsSort.chooseSubject(subjects[j])
                    worksheetsSort.checkEmptyText()
                } else if (subjects[j] == 'Nursery Rhymes' && grades[i] == 'Grade 3') {
                    worksheetsSort.chooseGrade(grades[i])
                    worksheetsSort.chooseSubject(subjects[j])
                    worksheetsSort.checkEmptyText()
                } else {
                    worksheetsSort.chooseGrade(grades[i])
                    worksheetsSort.chooseSubject(subjects[j])
                    worksheetsSort.clickFirstCard()
                    worksheetsSort.checkGradeAndSubject(grades[i], subjects[j])
                }
            })
        }
    }
})