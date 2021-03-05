/// <reference types="cypress" />

describe('To page object or not to page object', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('is not that readable', () => {
        cy.contains('label', 'Email')
            .next()
            .type('not an email')

        cy.contains('button', 'Log in')
            .click()

        cy.contains('label', 'Email')
            .next()
            .next()
            .should('have.text', 'Email is not valid')
    })
    
    const loginPage = {
        emailInput(){
            return cy.contains('label', 'Email')
                .next()
        },
        logInButton(){
            return cy.contains('button', 'Log in')
        },
        emailErrorMessage() { 
            return this.emailInput()
                .next() 
        } 
    }
    it('should be slightly better', () => {
        loginPage.emailInput().type('not an email')

        loginPage.logInButton().click()

        loginPage.emailErrorMessage().should('have.text', 'Email is not valid')
    })
    
})
