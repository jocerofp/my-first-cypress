/// <reference types="cypress" />

import loginPage from '../../page-objects/login'

describe('Login', () => {
    // 🐼 Kliknij w link
    it('should click be able to go to register page', () => {
        cy.visit('/login')

        // 🐼 Dodaj kliknięcie w ten link
        loginPage.registerLink()

        cy.location('pathname').should('be.equal', '/register')
    })
    
    // 🐼 Wpisz dane z klawiatury
    it('should show password content when show password button is clicked', () => {
        const password = 'Password123'
        cy.visit('/login')

        // 🐼 Dodaj wpisanie zmiennej password do tego inputa
        loginPage.passwordInput()
        loginPage.showPasswordButton().click()

        loginPage.passwordInput().should('have.value', password)
        loginPage.passwordInput().should('have.attr', 'type', 'text')
    })

    // 🐼 Wszsytko razem - zaloguj się 
    it('should sign in the user with the correct credentials', () => {
        cy.visit("/login");

        // 🐼 wypełnij poprawnie formularz wypełniając inputy i klikając w przycisk log in
        
        cy.location('pathname').should('be.equal', '/');
    })
})
