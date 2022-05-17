/*
 * @LastEditors: Joseph Ocero
 * @DateCreated: 2022-05-10 13:32:26
 * @LastEditTime: 2022-05-10 18:43:32
 * @Description: basic UI login
 **/
/// <reference types="cypress" />

import Faker from 'faker';

context("Login authentication", () => {
    var username = 'mrjoe8888@gmail.com',
    textData,
    password = 'T3st2022';
    before(() => {
        cy.visit('/')
        // cy.visit("https://designmodo.com/my-account/sign-in/");

    })
    // after(() => {
    //     logout()
    // })
  describe('basic login', () => {
    it('Verify the text labels in the Login page', () => {

        cy.contains('h1', "Login to Designmodo").invoke('text').then((text) => {
            expect(text.trim()).equal('Login to Designmodo')
      });

//         cy.get('div > h1').invoke('text').then((text) => {
//             expect(text.trim()).equal('Login to Designmodo')
//         });
//         cy.get('label:nth-child(1) > div').invoke('text').then((text) => {
//             expect(text.trim()).equal('Your Email')
//         }); 
        
      
//         cy.get('label:nth-child(2) > div').invoke('text').then((text) => {
//             expect(text.trim()).equal('Password')
//         });
//         cy.get('div:nth-child(3) > label').invoke('text').then((text) => {
//             expect(text.trim()).equal('Remember me')
//         });
//         cy.get('div:nth-child(4) > label').invoke('text').then((text) => {
//             expect(text.trim()).equal('I agree to storage of my data according to Privacy Policy.')
//         });
//         cy.get('div.align-center.margin-top-3 > a').invoke('text').then((text) => {
//             expect(text.trim()).equal('Forgot your password or cannot log in?')
//         });
        var textData = [
            ['div > h1', 'Login to Designmodo'],
            ['label:nth-child(1) > div', 'Your Email'],
            ['label:nth-child(2) > div', 'Password'],
            ['div:nth-child(3) > label', 'Remember me'],
            ['div:nth-child(4) > label', 'I agree to storage of my data according to Privacy Policy.'],
            ['div.align-center.margin-top-3 > a', 'Forgot your password or cannot log in?']
        ];
        cy.verifyTextLabels(textData)
    });
    it('Verify should login if username and password are valid', () => {
        // // cy.get("input[id='username']").type('mrjoe8888@gmail.com'); 
        cy.get('#username').type('mrjoe8888@gmail.com'); //CSS selector: 
        // cy.get("input[id='password']").type('T3st2022');
        cy.get('#password').type('T3st2022@#$'); //CSS selector: 
        cy.get("span[class='element']").eq(0).click(); //click to uncheck the checkbox for remember me
        cy.get("span[class='element']").eq(1).click(); // chck to check the checkbox for agree to storage...
        cy.get("button[name='login']").click()


        // cy.loginPage(username, password)
        // cy.location().should((loc) => {
        //     expect(loc.pathname).to.eq('/my-account/')
        // })
        //   var textData = [
        //     ["h5[class='small']", 'User ProfilePersonal DetailsPassword'],
        // ];
        // cy.verifyTextLabels(textData)
    })
 
    it('Verify should not login if username is valid and password is invalid', () => {
        username = Faker.lorem.word();
        password = 'a'
        cy.get('#username').type(username);
        cy.get('#password').type(password)
        cy.get('#password').type('{backspace}');
        cy.get("span[class='element']").eq(0).click(); 
        cy.get("span[class='element']").eq(1).click(); 
        textData = [
            ["label[id='username-error']", 'Please enter a valid email address.'],
        ["label[id='password-error']", 'This field is required.'],
        ];
        cy.verifyTextLabels(textData)
    })

      
  })
  
})
