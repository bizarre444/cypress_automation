describe('First test', () => {

    beforeEach(function() {

    })

    it('open window', () => {
        cy.visit(Cypress.env('BASE_URL'))
        expect(true).to.equal(true)
    })
})