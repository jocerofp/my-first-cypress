/// <reference types="cypress" />
import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

Given('My step with {string} parameter', (stringVariable), () => {
    // This is how we can create a parameter in the step
    // other types are for instance number, boolean or custom types (https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#custom-parameter-type-resolves)
})

When('If a table is declared we will get it here ->', (table) => {
    // To get parsed table with the row objects using the header we can run hashes
    table.hashes()
    // To use clean two dimentional array we can use rows
    table.rows()
})

// These are beforeEach/afterEach equivalents
Before(() => {
    // we can set up our test this way
    cy.request('POST', '/init', { foo: 'bazz'}).then(request => {
        cy.wrap(request.body).as('initBody')
    })
})

After({ tags: "@foo" }, () => {
    // only if our scenario has @foo tag
})
