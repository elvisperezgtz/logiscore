 import loginPage from '../pageObjects/loginPage' 

Given(/^Que el usuario se encuentra en el modulo de inicio de sesion$/, () => {
    cy.visit('https://logiscore-services-esp-test.logisfashion.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlogis.core.ng%26redirect_uri%3Dhttps%253A%252F%252Flogiscore-esp-test.logisfashion.com%252Fauth.html%26response_type%3Did_token%2520token%26scope%3Dopenid%2520core%26state%3Dc0a855de33fd4f7d85b5fc57b0a5ed64%26nonce%3Dc8dda1312dd74431a2972c8b4f3f1a61')
});

 
When(/^el inicia sesion con credenciales erroneas$/, () => {
    /**cy.get('.b-login-link', {timeout:15000}).click(),**/
   /**  cy.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')*/
   //loginActions.fillTheLoginPage('testadmin@logispre.onmicrosoft.com','Dala7969.')


});
 
Then(/^el deberia poder el mensaje "([^"]*)"$/, (mensaje,) => {
   /**cy.get('.b-login-link', {timeout:15000}).click(),**/
    
});
When(/^el inicia sesion con sus credenciales$/, () => {
   /**cy.get('.b-login-link', {timeout:15000}).click(),**/
  
    cy.get('.b-login-link', {timeout:15000}).click()
    loginPage.typeUsername('testadmin@logispre.onmicrosoft.com')
    loginPage.typePassword('Dala7969.')
    loginPage.clickNetxButton() 
});
 
Then(/^entonces el deberia poder ver el saludo de bienvenida$/, () => {
 /*    cy.get('.b-login-link', {timeout:15000})
    loginPage.typeUsername('testadmin@logispre.onmicrosoft.com')
    loginPage.typePassword('Dala7969.')
    loginPage.clickNetxButton() */
});
