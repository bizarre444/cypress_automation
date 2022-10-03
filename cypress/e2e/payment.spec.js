import { paymentGo } from "../support/page_objects/payment"

describe('Check payment flow', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('staging') + 'subscription-plans/')
    })

    it('First plan with trial', () => {

        paymentGo.chooseCard(0)
        paymentGo.checkFullPrice('$48.99')
        paymentGo.checkTrial('7 days')
        paymentGo.checkTotalPrice('$0.00')
        paymentGo.checkPeriod('Yearly')

    })

    it('Second plan without trial', () => {

        paymentGo.chooseCard(1)
        paymentGo.checkPeriod('Quarterly')
        paymentGo.checkFullPrice('$39.99')
        paymentGo.checkTotalPrice('$39.99')

    })

    it('Third plan with  coupon', () => {
        paymentGo.chooseCoupon('FREE')
        paymentGo.chooseCard(2)
        paymentGo.checkPeriod('Monthly')
        paymentGo.checkTrial('166 days')
        paymentGo.checkDiscount('$20')
        paymentGo.checkFullPrice('$19.99')
        paymentGo.checkTotalPrice('$0.00')
    })
})