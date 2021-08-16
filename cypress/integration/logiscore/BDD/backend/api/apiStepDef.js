Given(/^que el servicio esta en linea$/, () => {
  Cypress.config(
    "baseUrl",
    "https://logiscore-services-it-pre.logisfashion.com"
  );
});

When(/^se ejecuta el endpoint token$/, () => {
  
  cy.request({
      method: 'POST',
      url: 'logiscore-services-it-pre.logisfashion.com',
     headers: {
        'Content-Type': 'application/x-www-form-urlencoded'

     },
     body: {
        grant_type: "password",
        client_id: "loadtest",
        client_secret: "secret",
        scope: "openid core",
        username: "1000025",
        password: "password",
      },
  })
  .then((response) => {
    expect(response).property("status").to.equal(200);
  });
});

Then(
  /^deberia poder ver el status '200' en la respuesta del servicio$/,
  () => {}
);
