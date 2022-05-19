/* Creator: Joseph ocero
 * @LastEditors: Joseph Ocero
 * @DateCreated: 2022-05-16 13:32:26
 * @LastEditTime: 2022-05-17 18:43:32
 * @Description: basic API Test cases
 **/
/// <reference types="cypress" />

context("API", () => {

  describe('basic API', () => {

    it('Verify Admin can invoke getUserLogged Data', () => {
        cy.request({
            method: 'GET',
            form: true,
            url: "api/User/GetLoggedUserData?",
            headers: {
              'X-ZUMO-AUTH': Cypress.env('X-ZUMO-AUTH'),  
              'X-MS-TOKEN-AAD-ACCESS-TOKEN' : Cypress.env('X-MS-TOKEN-AAD-ACCESS-TOKEN'),       
            },
            params: {
                loggedUserEmail: `${Cypress.env('username')}`
            },
            body: null
          }).then(response => {
            console.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.email).to.equal(Cypress.env('username'));
            expect(response.body.id).to.equal('d6ab1186-df71-4c0b-8697-3510a50cb3a6');
            expect(response.body.roles[0]).to.equal('Admin');
            expect(response.body.workspaceType).to.equal(2);
            })
        })

    })

    
 
    it('Verify Admin can create reservation for employee', () => {
        const mydata = {
            reservingEmployee:"D6AB1186-DF71-4C0B-8697-3510A50CB3A6",
            reservationStart: "2022-05-19T01:59:59.999Z",
            reservationEnd: "2022-05-21T04:59:59.999Z",
            deskId: "4F0F5882-D821-43C7-10F6-08D8F8E4DF74"
        }
        cy.request({
            method: 'POST',
            url: 'api/HotDesk',
            headers: {
                'Content-Type': 'application/json',
                'X-ZUMO-AUTH': Cypress.env('X-ZUMO-AUTH'),  
                'X-MS-TOKEN-AAD-ACCESS-TOKEN' : Cypress.env('X-MS-TOKEN-AAD-ACCESS-TOKEN'),
            },
            body: mydata,
          }).then(response => {
              console.log(response)
              expect(response.status).to.be.equal(200)
              Cypress.env('deskId', response.body)
              console.log(response.body.length)
           
          })
    })
    
})
