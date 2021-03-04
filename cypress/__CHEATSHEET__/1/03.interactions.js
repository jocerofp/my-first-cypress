// ============================ SYMULOWANIE USERA ============================

// 🐼 Cypress ma wbudowane wiele funkcji, które pozwalają na interakcję ze znalezionymi elementami.
// Większość z ich nazw może być bardzo intuicyjna. Poniżej znajdziesz parę, które mogą ci się przydać w ćwiczeniach
// Załóż, że funkcja element to twoja metoda z page objectu, która zwraca element 

cy.get('button').click();                       // kliknij w element na stronie
cy.get('input').focus();                        // sfocusuj element
cy.get('input').type('Text');                   // wpisz tekst do inputa, lub wciśnij przycisk na klawiaturze (należy podać string z jego nazwą np. {ENTER})
cy.get('input').clear();                        // wyczyść input
cy.get('[type="checkbox"]').check();            // zaznacz i odznacz checkbox
cy.get('[type="checkbox"]').uncheck();
cy.get('[type="select"]').select('Option 1');   // wybierz opcję w dropdownie

// ============================ SYMULOWANIE KONKRETNEGO ZACHOWANIA API ============================

// 🐼 Oprócz tego przyda ci się także stubowanie requestów z przeglądarki. Dzięki temu możesz
// upewnić się, że request został zrobiony. Pamiętaj aby zapisać odniesienie do requestu do aliasu i wywołać
// metodę wait wtedy kiedy spodziewasz się jego realizacji
// WAŻNE - intercept powinien być zadeklarowany jako pierwszy 

cy.intercept("GET", "http://my-api.com/things").as("request");
cy.wait("@request");

// 🐼 Możesz również zapewnić określoną odpowiedź serwera na przykład poprzez ładowanie swojego pliku fixture (wystarczy, że wrzucisz jsona do folderu fixtures)
// mozna tez zmieniac status odpowiedzi poprzez property statusCode
cy.intercept("POST", "http://my-api.com/things", { fixture: "fixture.json", statusCode: 404 });

// ============================ WYCIAGANIE DANYCH ============================

// 🐼 Metoda która przydaje się przy wyciąganiu propertasów danych elementów. Pozwala na sprawdzenie
// długości tablicy list itemów lub tekstu, który znajduje się w paragrafie

cy.get('ul').children().its('length')           // Pobierz liczbę dzieci w liście 
cy.get('p').its('text')                         // Pobierz tekst paragrafu
