describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://fly.rn-stage-fe.kuiperz.dev/");
    cy.viewport(1366, 768); // Set viewport size to 1366x768
  });

  it("should log in with valid credentials", () => {
    cy.get('input[name="username"]').type("your_username");
    cy.get('input[name="password"]').type("your_password");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("should display error message with invalid credentials", () => {
    cy.get('input[name="username"]').type("invalid_username");
    cy.get('input[name="password"]').type("invalid_password");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid username or password").should("be.visible");
  });
});
