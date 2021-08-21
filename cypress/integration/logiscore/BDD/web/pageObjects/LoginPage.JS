class LoginPage {
  getUsernameField() {
    return cy.getEditBox(cy.get("input[name='loginfmt']", { timeout: 15000 }));
  }
  getNextButton() {
    return cy.get("#idSIButton9");
  }
  getPasswordField() {
    return cy.get("input[name='passwd']");
  }
  getAccesByCoorporativeUserLink() {
    cy.get(".b-login-link", { timeout: 15000 });
  }
}

export default LoginPage;
