import LoginActions from '../pageActions/LoginActions';
loginActions = new LoginActions()
Given(/^Que el usuario se encuentra en el modulo de inicio de sesion$/, () => {
    cy.visit('https://logiscore-it-pre.logisfashion.com/')
});

 
When(/^el inicia sesion con credenciales erroneas$/, () => {
    /**cy.get('.b-login-link', {timeout:15000}).click(),**/
   /**  cy.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')*/
   loginActions.fillTheLoginPage('testadmin@logispre.onmicrosoft.com','Dala7969.')
});
 
Then(/^el deberia poder el mensaje "([^"]*)"$/, (mensaje,) => {
   /**cy.get('.b-login-link', {timeout:15000}).click(),**/
    ('testadmin@logispre.onmicrosoft.com','Dala7969.')
    cy.get('.b-login-link', {timeout:15000})
    
});
When(/^el inicia sesion con sus credenciales$/, () => {
   /**cy.get('.b-login-link', {timeout:15000}).click(),**/
   loginActions.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')
   
});
 
Then(/^entonces el deberia poder ver el saludo de bienvenida$/, () => {
});