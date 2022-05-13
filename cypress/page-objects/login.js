/// <reference types="cypress" />

// 🐼 Fix the input selector and continue to add more selectors

const loginPage = {
    url: '/login',

    get registerLink() { 
        return cy.contains('register') 
    },
    get emailInput() { 
        return  cy.get('input[id="email"]')
    },
    get passwordInput() {
        return cy.get('input[name="password"]')
    },
    get showPasswordButton() {
        return cy.get('button[type="submit"]')
    },
} 

export default loginPage