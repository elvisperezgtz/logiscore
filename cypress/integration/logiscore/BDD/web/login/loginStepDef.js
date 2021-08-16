
Given(/^Que el usuario se encuentra en el modulo de inicio de sesion$/, () => {
    cy.visit('https://logiscore-it-pre.logisfashion.com/')
});

And  (/^Se redirecciona como usuario corporatrivo$/, () => {
    cy.get("//a[contains(text(),'Acceso usuario corporativo')]").click() 
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
When(/^el inicia sesion con sus credenciales$/, () => {
    cy.llenarFormularioLogin('testadmin@logispre.onmicrosoft.com','Dala7969.')
    cy.get('.btn').click()
});
 
Then(/^entonces el deberia poder ver el saludo de bienvenida$/, () => {
});