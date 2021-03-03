import loginPage from '../../page-objects/login'

// 🐼 Nazwij grupę testów
describe('...', () => {
    
    // 🐼 opisz co powinno się stać i w jakich okolicznościach 
    it('should...', () => {
        cy.visit("/login");

        // 🐼 wypełnij formularz
        loginPage.emailInput() // ...
        
        cy.location('pathname').should('be.equal', '/');
    })
})
