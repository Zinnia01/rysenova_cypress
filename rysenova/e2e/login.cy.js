import './commands'

describe('Login', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should be authenticated across tests', () => {
      cy.url().should('eq', 'https://fly.rn-stage-fe.kuiperz.dev/login');
  });
});
