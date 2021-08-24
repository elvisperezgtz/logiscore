class loginPage {
  /*getUsernameField() {
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
  }*/
  elements = {
    usernameInput: () =>cy.get("input[name='loginfmt']", { timeout: 15000 }),
    nextButton:  ()=> cy.get('idSIButton9'),
    passwordInput: ()=> cy.get("input[name='passwd']")

  }
  typeUsername(username){
    this.elements.usernameInput().type(username)
  }
  typePassword(password){
    this.elements.passwordInput().type(password)
  }

  clickNetxButton(){
    this.elements.nextButton().click()
  }
}

module.exports = new loginPage();
