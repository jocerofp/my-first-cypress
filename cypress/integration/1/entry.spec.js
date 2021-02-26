// 🐼 Nazwij grupę testów
describe('...', () => {
    
    // 🐼 opisz co powinno się stać i w jakich okolicznościach 
    it('should...', () => {
        cy.visit("https://cypress-training-page-wpaczula.vercel.app");

        // 🐼 wypełnij formularz
        
        cy.location('pathname').should('be.equal', '/');
    })
})
