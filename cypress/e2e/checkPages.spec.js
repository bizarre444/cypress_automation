const { navigateTo } = require("../support/page_objects/navigation")
const { checkTitle } = require("../support/page_objects/titlesCheck")

describe('Tests For Pages', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('staging'))
    })

    it('Home Page check title', () => {

        checkTitle.homePageCheck()
    })

    it('Parent Page check title', () => {

        navigateTo.navigateToParentPage()
        checkTitle.parentPageCheck()
    })

    it('Teacher Page check title', () => {

        navigateTo.navigateToTeacherPage()
        checkTitle.teacherPageCheck()
    })

    it('Learning Resources Page check title', () => {

        navigateTo.navigateToLearningPage()
        checkTitle.learningResourceCheck()
    })

    it('Gift Card Page check title', () => {

        navigateTo.navigateToGiftCardPage()
        checkTitle.giftPageCheck()
    })
})