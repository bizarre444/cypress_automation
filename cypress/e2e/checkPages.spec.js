describe('Tests For Pages', () => {

    beforeEach(() => {
        cy.visit('https://www.ka-stage.ml')
    })

    it('Home Page check title', () => {

        cy.get('.home-main-section__heading')
            .then(title => {
                const newTitle = title.find('.home-main-section__title').text().replace()
                expect(newTitle).to.include('Learning Website for Kids Pre-K to 3rd Grade')
            })
    })

    it('Parent Page check title', () => {

        cy.contains('Parents').click()
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.parents__hero-top-title').text().replace()
                expect(newTitle).to.include('Best Parenting Website from Kids Academy')
            })
    })

    it('Teacher Page check title', () => {

        cy.contains('Educators').click()
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.teacher-hero-section__title').text().replace()
                expect(newTitle).to.include('Teachers now have Kids Academy!')
            })
    })

    it('Learning Resources Page check title', () => {

        cy.contains('Learning Resources').click()
        cy.get('.learning-resources__main-heading')
            .then(title => {
                const newTitle = title.find('.learning-resources__main-title').text().replace()
                expect(newTitle).to.include('Kids Academy Learning Resources')
            })
    })

    it('Gift Card Page check title', () => {

        cy.contains('Gift Cards').click()
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.gift-page__title').text().replace()
                expect(newTitle).to.include('Give the Gift of Learning!')
            })
    })
})