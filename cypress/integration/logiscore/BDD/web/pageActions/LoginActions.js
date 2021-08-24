import LoginPage from "../pageObjects/LoginPage.JS";

class LoginActions {
  loginPage = new LoginPage();

  fillTheLoginForm(username, password) {
    loginPage.getUsernameField().type(username);
    loginPage.getNextButton().click();
    loginPage.getPasswordField().type(password);
    loginPage.getNextButton().click();
  }
}

export default LoginActions;
