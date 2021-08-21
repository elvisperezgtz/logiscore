/// <reference types="Cypress" />

let requestResponse = null;
let token = null;

Given(/^que el servicio esta en linea$/, () => {
  Cypress.config(
    "baseUrl",
    "https://logiscore-services-${Cypress.env('enviroments.env')}.logisfashion.com"
  );
  
});

When(/^se ejecuta el endpoint token$/, () => {
  cy.get_token().then((response) => {
    const requestResponse = response.body.access_token;
    expect(response.status).to.eq(200);
    //actualizar el token
    cy.readFile("cypress/fixtures/testdata.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      cy.log(data);
      data.access_token = response.body.access_token; 
      cy.writeFile(
        "cypress/fixtures/testdata.json",
        JSON.stringify(data)
      ); //Write it to the fixtures file
    });
    
  });
});

Then(/^deberia poder ver el status '200' en la respuesta del servicio$/, () => {

//API import inbound
  cy.fixture('testjp.json').then((datos)=>{
    cy.import_inbound(datos.poNumber).then((response) =>{
      expect(response.status).to.eq(204);
    })
  })
 //API import inbound id
  cy.fixture('testdata.json').then((token) =>{
    cy.fixture('testjp.json').then((datos)=>{
      cy.log("token "+ token.access_token)
      cy.import_inbound_id(datos.poNumber,token.access_token)
      .then((response)=>{
        expect(response.status).to.eq(200)
      }) 
    })
  })

 

});
