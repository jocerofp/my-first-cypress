/// <reference types="cypress" />

// 🐼 Uzyteczne metody:
// cy.get(CSS-SELECTOR) - wybierz element
// cy.get(CSS-SELECTOR, TEXT) - wybierz element po tekście (mozesz uwzglednic takze selektor)
// .type(TEXT) - wpisz w input
// .select(TEXT) - wybierz z dropdowna
// .click() - kliknij myszą
// .should('be.visible')

describe('Greeting form', () => {
    beforeEach(() => {
        /*
         * Tutaj możesz umieścić wejście na stronę + logowanie - ten krok powtarza się dla każdego test case'u 
         */
    })
    /*
    Test case 1
        Wejdź na stronę /1/simple-test
        Wypełnij płeć - mężczyzna
        Wpisz imię - Jan
        Wyślij formularz przyciskiem "Wyślij"
        Spodziewany rezultat: Zostaje wyświetlony toast z powitaniem: "Witaj Jan! Cieszę się, że wysłałeś ten formularz!"
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Wejdź na stronę /1/simple-test
        Wypełnij płeć - kobieta
        Pozostaw imię puste
        Wyślij formularz przyciskiem "Wyślij"
        Spodziewany rezultat: Zostaje wyświetlony toast z powitaniem: "Cześć tajemnicza nieznajoma! Cieszę się że wysłałaś ten formularz!"
    */
   it('should 2...', () => {
       
   })
})
