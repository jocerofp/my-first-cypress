/// <reference types="cypress" />

import readAndEditPage from '../../page-objects/read-and-edit'
// 🐼 Useful methods:
// cy.get(CSS-SELECTOR).as('alias') - save an alias
// cy.get('@alias').then((value) => { ... }) - get value from alias
// cy.get(CSS-SELECTOR).next() - get next element
// cy.get(CSS-SELECTOR).children() - get children of the element
// cy.get(CSS-SELECTOR).children().eq(0) - get the first child of the element
// cy.get(CSS-SELECTOR, TEXT) - find by text
// .check() - check checkbox input
// .should('have.length', length) - assert length

describe('Get my emoji', () => {
    beforeEach(() => {
        /*
         * Go to your page and invoke log in command 
         */
    })
    
    /*
    Test case 1
        Visit /1/edit-save
        Get emoji count
        Go into edit mode with "Edit" button
        Increase the number of emojis with up arrow
        Check "not a robot" checkbox
        Save with "Save" button
        Expected result: One more emoji is visible.
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Visit /1/edit-save
        Get emoji count
        Go into edit mode with "Edit" button
        Clear "Emoji count" input
        Cancel your changes
        Expected result: The count of emojis is not changed, but you get a different set of them
    */
   it('should 2...', () => {
    readAndEditPage.emojis
   })
})
