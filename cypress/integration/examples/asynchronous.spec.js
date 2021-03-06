describe('Asyncronous cypress', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('should make me think what will happen in what order', () => {
        cy.contains('register').click()

        console.log('LOG 1')

        cy.contains('login').click()

        console.log('LOG 2')
    })

    it('should make me think what will happen in what order number 2', () => {
        cy.contains('register').click()

        cy.log('LOG 1')

        cy.contains('login').click()

        cy.log('LOG 2')
    })

    it('should show me what happens then', () => {
        cy.contains('register').click().then(() => {
            console.log('LOG 1')
        })

        cy.contains('login').click().then(() => {
            console.log('LOG 2')
        })
    })
})
