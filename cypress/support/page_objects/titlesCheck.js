export class TitlesCheck {

    homePageCheck() {
        cy.get('.home-main-section__heading')
        .then(title => {
            const newTitle = title.find('.home-main-section__title').text().replace()
            expect(newTitle).to.include('Learning Website for Kids Pre-K to 3rd Grade')
        })
    }

    parentPageCheck() {
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.parents__hero-top-title').text().replace()
                expect(newTitle).to.include('Best Parenting Website from Kids Academy')
            })
    }

    teacherPageCheck() {
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.teacher-hero-section__title').text().replace()
                expect(newTitle).to.include('Teachers now have Kids Academy!')
            })
    }

    learningResourceCheck() {
        cy.get('.learning-resources__main-heading')
            .then(title => {
                const newTitle = title.find('.learning-resources__main-title').text().replace()
                expect(newTitle).to.include('Kids Academy Learning Resources')
            })
    }

    giftPageCheck() {
        cy.get('.container')
            .then(title => {
                const newTitle = title.find('.gift-page__title').text().replace()
                expect(newTitle).to.include('Give the Gift of Learning!')
            })
    }
}

export const checkTitle = new TitlesCheck()