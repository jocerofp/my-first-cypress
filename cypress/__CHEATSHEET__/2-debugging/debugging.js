// ================================== MANUAL WORK =========================================

// 🐼 By far the easiest way to debug is checking out what error is shown by cypress - they are mostly
// very good and checking previous screenshots by time travel going step by step might be just enough

// ================================== DEBUG =========================================

// 🐼 If we need to stop and see what is returned by some specific method we can use DEBUG method
// It is crutial to open the dev tools first though, so the code is stopped. The results are
// shown in the console

cy.get('button').click().debug() // it will show what was "click" invoked with in the console

// ================================== PAUSE =========================================

// 🐼 In order to go to step by step mode we can use PAUSE method. Then we can controll
// how fast the methods are run and examine the issue slower. It may be super useful
// to check the requests

cy.pause() // from this point cypress will go step by step

// ================================== NATIVE BROWSER DEBUGGER =========================================

// 🐼 The last way to debug is the native debugger keyword. It is a synchronous method which will
// stop cypress' code and let us see in sources what are the variables in the scope
// it only makes sense after THEN method is run

cy.get('.my-item').then(item => {
    debugger;
})
