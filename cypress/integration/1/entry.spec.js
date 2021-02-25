describe('Entry', () => {
    it('should run', () => {
        cy.visit("https://cypress-training-page-wpaczula.vercel.app/2/edit-save");

        cy.log('Hello world 👋')
    })
})
