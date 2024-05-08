Cypress.Commands.add('login', () => {
  // cy.visit('/login');
  cy.visit('https://stage.ayersfood.com/login');
   // Perform login actions here
   cy.get('#login-email').type('test@ecom.com');
   cy.get('#login-password').type('password');
   // Submit the login form
   cy.get('.btn-primary').click();
 });
 Cypress.Commands.add('getSession', () => {
   return cy.wrap(Cypress.env('loginSession'));
 });
 Cypress.Commands.add('setWarehouseName', (name) => {
   Cypress.env('warehouseName', name);
 });
 Cypress.Commands.add('getWarehouseName', () => {
   const baseName = 'Warehouse';
   const randomString = Math.random().toString(36).substring(7);
   const warehouseName = `${baseName} ${randomString}`;
   return warehouseName;
 });
 // commands.js
 Cypress.Commands.add("selectDropdownOption", (dropdownSelector, optionIndex) => {
 cy.get(dropdownSelector).click();
 cy.get(".vs__dropdown-menu", { timeout: 10000 }).should("be.visible");
 cy.get(".vs__dropdown-option", { timeout: 10000 }).eq(optionIndex).click();
 });