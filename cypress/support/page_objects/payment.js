export class Payment {

    chooseCard(num) {
        cy.get('.subscription-plans-sample__list')
            .find('[data-selector="subscription-plan-input-wrapper"]')
            .eq(num)
            .click()
        cy.wait(5000)
    }

    checkFullPrice(price) {
        cy.get('.subscription-plans-sample__payment-container')
            .find('[data-selector="plan-full-price-value"]')
            .should('contain', price)
    }

    checkTrial(trial) {
        cy.get('.subscription-plans-sample__payment-container')
            .find('[data-selector="plan-trial-period-value"]')
            .should('contain', trial)
    }

    checkTotalPrice(price) {
        cy.get('.subscription-plans-sample__payment-container')
            .find('[data-selector="plan-total-price-value"]')
            .should('contain', price)
    }

    checkPeriod(period) {
        cy.get('.subscription-plans-sample__payment-container')
            .find('[data-selector="plan-period-value"]')
            .should('contain', period)
    }

    checkDiscount(discount) {
        cy.get('.subscription-plans-sample__payment-container')
            .find('[data-selector="plan-discount-value"]')
            .should('contain', discount)
    }

    chooseCoupon(coupon) {
        cy.get('.subscription-plans-sample__coupon')
            .find('[data-selector="toggle-coupon-block-btn"]')
            .click()
        cy.get('.subscription-plans-sample__coupon-input-container')
            .find('[data-selector="enter-coupon-input"]')
            .click()
            .type(coupon, { delay: 1000 })
        cy.get('.subscription-plans-sample__coupon-form')
            .find('[data-selector="apply-coupon-btn"]')
            .click()
        cy.wait(2000)
    }
}

export const paymentGo = new Payment()