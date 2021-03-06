
Given(/^Que el usuario se encuentra en el modulo de inicio de sesion$/, () => {
    cy.visit('https://logiscore-it-pre.logisfashion.com/')
});

 
When(/^el inicia sesion con credenciales erroneas$/, () => {
    cy.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')
    cy.get('.btn').click()
});
 
Then(/^el deberia poder el mensaje "([^"]*)"$/, (mensaje,) => {
    cy.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')
    cy.get('.btn').click()
    cy.get('#Login-error > span').should('have.text', 'Usuario o contraseña incorrectos.')
});