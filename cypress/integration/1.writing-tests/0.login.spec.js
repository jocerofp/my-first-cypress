/// <reference types="cypress" />

import loginPage from '../../page-objects/login'

describe('Login', () => {
    // 🐼 Click the link
    it('should click be able to go to register page', () => {
        cy.visit(loginPage.url)

        // 🐼 Click the register link
        loginPage.registerLink

        cy.location('pathname').should('be.equal', '/register')
    })
    
    // 🐼 Add data from the keyboard
    it('should show password content when show password button is clicked', () => {
        const password = 'Password123'
        cy.visit(loginPage.url)

        // 🐼 password variable needs to be typed into this input
        loginPage.passwordInput
        loginPage.showPasswordButton.click()

        loginPage.passwordInput.should('have.value', password)
        loginPage.passwordInput.should('have.attr', 'type', 'text')
    })

    // 🐼 All together - log in
    it('should sign in the user with the correct credentials', () => {
        cy.visit(loginPage.url)

        // 🐼 fill the form and click log in
        // register your user manually before that
        
        cy.location('pathname').should('be.equal', '/');
    })
})
