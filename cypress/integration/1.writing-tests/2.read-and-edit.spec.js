/// <reference types="cypress" />

import readAndEditPage from '../../page-objects/read-and-edit'
// 🐼 Uzyteczne metody:
// cy.get(CSS-SELECTOR).as('alias') - zapisz "na pozniej"
// cy.get('@alias').then((value) => { ... }) - pobierz zapisaną wartość
// cy.get(CSS-SELECTOR).next() - wybierz element ponizej
// cy.get(CSS-SELECTOR).children() - wybierz dzieci elementu
// cy.get(CSS-SELECTOR).children().eq(0) - wybierz pierwsze dziecko elementu
// cy.get(CSS-SELECTOR, TEXT) - wybierz element po tekście (mozesz uwzglednic takze selektor)
// .check() - zaznacz znaleziony input
// .should('have.length', length) - sprawdź długość

describe('Get my emoji', () => {
    beforeEach(() => {
        /*
         * Tutaj możesz umieścić wejście na stronę + logowanie - ten krok powtarza się dla każdego test case'u 
         */
    })
    
    /*
    Test case 1
        Wejdź na stronę /1/edit-save
        Wczytaj liczbę emoji
        Wejdź w tryb edycji za pomocą przycisku "Edytuj"
        Zwiększ liczbę o 1 za pomocą strzałki w górę
        Zaznacz checkbox, który sprawdza, że nie jesteś robotem
        Zapisz zmiany za pomocą przycisku "Zapisz"
        Spodziewany rezultat: Zostaje wyświetlony o jeden więcej emoji.
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Wejdź na stronę /1/edit-save
        Wczytaj liczbę emoji
        Wejdź w tryb edycji za pomocą przycisku "Edytuj"
        Wyczyść input "Liczba emoji"
        Odrzuć zmiany za pomocą przycisku "Anuluj"
        Spodziewany rezultat: Liczba emoji pozostaje bez zmian, ale one same się zmieniają
    */
   it('should 2...', () => {
    readAndEditPage.emojis()
   })
})
