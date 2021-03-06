const simpleTestPage = {
	genderSelect() {
		return cy.get('[name="gender"]')
	},
	nameInput() {
		return cy.get('[name="name"]')
	},
	sendButton() {
		return cy.get('[type="submit"]')
	},
	helloManToast(name) {
		return cy.contains(`Witaj ${name}! Cieszę się, że wysłałeś ten formularz!`)
	},
}
const loginPage = {
	emailInput() {
		return cy.get('[name="email"]')
	},
	passwordInput() {
		return cy.get('[name="password"]')
	},
	loginButton() {
		return cy.get('[type="submit"]')
	},
}

describe('Simple test', () => {
	beforeEach(() => {
		cy.visit('/2/simple-test')
		loginPage.emailInput().type('test@user.com')
		loginPage.passwordInput().type('Password123')
		loginPage.loginButton().click()
	})

	it('should display welcome message for man with a name', () => {
		const name = 'Jan'
		const gender = 'Mężczyzna'

		simpleTestPage.genderSelect().select(gender)
		simpleTestPage.nameInput().type(name)
		simpleTestPage.sendButton().click()

		simpleTestPage.helloManToast(name).should('be.visible')
	})
})
