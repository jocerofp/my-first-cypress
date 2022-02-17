// 🐼 To find an element cypress uses css selectors and going between nodes using various ways
// You can find methods, that will help you during exercises below. If you feel, some selector is not right
// you can test it in the browser. Open the devtools on the page (F12), go to the console and write $(YOUR_SELECTOR).
// The method will return the result of your selector

// ============================ GET ============================

// 🐼 GET method allows to find an element using css selector
// it means that you can use classes, ids, attributes or tags
// you can find some examples below

cy.get("button");                               // find element with button tag
cy.get("#my-id");                               // find element with id my-id
cy.get('[name="email"]');                       // find element with name attribute = "email"

// ===== IMPORTANT =====
// Cypress doesn't support xpath out of the box, but it is not a disadvantage comparing to selenium
// CSS selectors are faster. If your team really needs them you can install a plugin via npm
// Cypress team suggests to not be dependent on the styling/HTML:

cy.get('button')                                // not a stable selector it will stop working if another button will be added to the page
cy.get('.button')                               // also not reliable if .button is a class added to a generic button component for the same reason as above
cy.get('#submit-button')                        // this one is better but is connected to styling/JS listeners
cy.get('[name=email]')                          // it is less change-prone, but is connected with HTML semantic
cy.contains('Submit')                           // users tend to search by text and sometimes it is fine to use it - it defines user's flow
cy.get('[data-cy=submit]')                      // isolated from CSS and HTML, but requires changes in the application code

// ============================ FIND ============================

// 🐼 FIND method allows to look for an element in a given container. Most often it is used right after GET

cy.get("#container").find(".toast");            // find element with id "container" and inside look for an element with class ".toast"

// ============================ CONTAINS ============================

// 🐼 CONTAINS allows to search using text/regex. It also allows to declare a css selector first to make the selector more precise
// it can also be used with FIND

cy.contains("Save");                            // find element with text "Save"
cy.contains("/regex/");                         // find element with text which matches the regex
cy.contains('.button[type="submit"]', "Save");  // find submit button with text "Save"

// ============================ NEXT ============================

// 🐼 Method allows to get the element "below". It is based on the hierarchy of the DOM so we need to be careful with it

// <label>Email</label>
// <input name="email"/>
cy.contains("Email").next();                    // get email input using the label

// ============================ CHILDREN and PARENT ============================

// 🐼 Methods CHILDREN and PARENT allows to go in and out of a node children. Similar to NEXT is is based on the hierarchy so
// the tests may become flaky

// <ol class="list">
//    <li>Uno</li>
//    <li>Dos</li>
//    <li>Tres</li>
// </ol>
cy.get(".list").children();                     // method CHILDREN will return an array of "li" elements

// ============================ EQ ============================

// 🐼 When using array types EQ allows to pick an item at the specific index
cy.get('#element').children().eq(1) // method will return the second child

// ============================ AS ============================

// 🐼 When some variable needs to be created cypress suggests to use AS method. It is used to create aliases. To get the value
// of the alias we need to execute get(@ALIAS) method - the @ sign is required and this way cypress knows to look in aliases and
// not in the DOM

cy.get(".use-later")
  .as("later");

// ...

cy.get("@later").then((myVariable) => {
    // 🐼 myVariable contains the value saved by "as" before
}); 
