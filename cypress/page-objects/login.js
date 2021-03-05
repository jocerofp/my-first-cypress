// 🐼 Popraw selektor inputa na email i kontynuuj pisanie selektorów
// z użyciem Page Objectów 

const loginPage = {
    registerLink: () => cy.contains('register'),
    emailInput: () => cy.get('?'),
    passwordInput: () => cy.get('input[name="password"]'),
    showPasswordButton: () => cy.get('.chakra-input__right-element').find('button')
}

export default loginPage