export default {
  url: '/3/files', 
  get downloadButton() {
    return cy.contains("a", "Pobierz");
  },
  };
  