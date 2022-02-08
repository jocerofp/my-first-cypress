// PATTERNY KTÓRE OKAZAŁY SIĘ PRZYDATNE PRZY INTERCEPCIE

// JS
const interceptFactory = (method, pathname, requestName) => {
    return (routeHandler) => {
        cy.intercept(method, pathname, routeHandler).as(requestName)
        
        return () => cy.wait(`@${requestName}`)
    }
}

// intercepts.js
const interceptGetUsers = interceptFactory('GET', '/users', 'getUsers')
// ... in the code

// my-test.test.js
it('should load users when the load button is clicked', () => {
    const waitForGetUsers = interceptGetUsers({ fixture: 'getUsersMock' })
    
    page.loadUsersButton().click()
    waitForGetUsers()
    
    expect(page.userTable()).to.be.visible()
})