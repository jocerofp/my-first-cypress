// ==================== LIBRARIES =======================

// 🐼 Sometimes cypress doesn't provide something out of the box and we need to get a third party library
// libraries that will be useful in our exercises will be cypress-file-upload which allows to upload
// a file either by a normal input or drag and drop

// https://www.npmjs.com/package/cypress-file-upload

// 🐼 parsing CSV is also a standard thing to do. There is no point to do it manually each time when there
// are so many good libraries on npm. The one that I prefer is called papaparse. It has an easy interface
// and allows to parse files efficiently. Downloading file from disk can be done by cypress directly:

import Papa from "papaparse";

cy.readFile('path/to/file/from/the/root/of/the/project').then(file => {
    // do whatever with the file
    const parsedFile = Papa.parse(file, { header: true });
    const {data} = parsedFile;
})

// ========================== WRAP =============================

// 🐼 When parsing we use often use "then" method and we are out of cypress chain. The functions won't be visible in
// the runner anymore but we can go back. To do it we can use WRAP method. By doing it this way we can
// see what values we are operating with without a need to use the native debugger

const users = [];
cy.wrap(users).each(user => {
    cy.wrap(user).as('user');

    cy.get('@user').its('id').should('not.be.undefined');
})

// Another way would be the clean JS and expect, but as mentioned it won't be shown in the runner. It is up to the team to 
// decide the preferred way

const users = [];
users.forEach(user => {
    expect(user.id).not.to.be.undefined()
})