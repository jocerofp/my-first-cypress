/// <reference types="cypress" />

describe('Setup test', () => {
	it('should open runner and run the test', () => {
		cy.visit('/login')

        cy.contains('Login').should('be.visible')
        
        cy.log('GRATULACJE, CYPRESS JEST POPRAWNIE SKONFIGUROWANY')
	})
})
