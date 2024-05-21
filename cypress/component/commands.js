Cypress.Commands.add('login', () => {
    
    cy.visit('/');

    // Perform login actions here
    cy.get('#user_name').type('admin@fly.app');
    cy.get('#password').type('admin@fly.app');

    // Submit the login form
    cy.get('.mt-8 > .flex').click();
  });
  
  Cypress.Commands.add('getSession', () => {
    return cy.wrap(Cypress.env('loginSession'));
  });
  
