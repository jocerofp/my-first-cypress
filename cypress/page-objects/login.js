/// <reference types="cypress" />

// 🐼 Popraw selektor inputa na email i kontynuuj pisanie selektorów
// z użyciem Page Objectów 

const loginPage = {
    registerLink() { 
        return cy.contains('register') 
    },
    emailInput() { 
        return  cy.get('?') 
    },
    passwordInput() {
        return cy.get('input[name="password"]')
    },
    showPasswordButton() {
        return cy.get('.chakra-input__right-element').find('button')
    },
} 

export default loginPage