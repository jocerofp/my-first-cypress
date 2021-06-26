/// <reference types="cypress" />

// 🐼 Przydatne metody
// cy.intercept(METHOD, URL, { fixture: FILE, statusCode: CODE }).as('request')
// cy.wait('@request')

describe('Make my blik payment', () => {
    beforeEach(() => {
        /*
         * Tutaj możesz umieścić wejście na stronę + logowanie - ten krok powtarza się dla każdego test case'u 
         */
    })
    
    /*
    Test case 1
        Wejdź na stronę /1/simulating-requests
        Wypełnij kwotę
        Wypełnij numer telefonu
        Wyślij formularz przyciskiem "Prześlij blikiem" 
        (w tym przypadku nie symuluj odpowiedzi, wykorzystaj faktyczny request)
        Spodziewany rezultat: Jeżeli numer telefonu istnieje i przelew został zrobiony 
            użytkownik powinien zobaczyć informację o treści 
            "Kwota *KWOTA*PLN została poprawnie przelana na numer *NUMER*"
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Wejdź na stronę /1/simulating-requests
        Wypełnij kwotę
        Wypełnij numer telefonu
        Wyślij formularz przyciskiem "Prześlij blikiem"
        Spodziewany rezultat: Jeżeli numer telefonu nie istnieje 
            (status 404 i określone body { code: "number_not_found" }) 
            użytkownik powinien zobaczyć informację o treści 
            "Nie udało się znaleźć odbiorcy o numerze telefonu *NUMER_TELEFONU*"
    */
   it('should 2...', () => {
       
   })

    /* 
    Test case 3
        Wejdź na stronę /1/simulating-requests
        Wypełnij kwotę
        Wypełnij numer telefonu
        Wyślij formularz przyciskiem "Prześlij blikiem"
        Spodziewany rezultat: Jeżeli konto nie ma wystarczających środków 
        (status 403 i określone body { code: "lack_of_funds" }) 
        użytkownik powinien zobaczyć informację o treści 
        "Nie udało się przesłać *KWOTA* PLN z uwagi na brak środków na koncie"
    */
   it('should 3...', () => {
       
   })
})
