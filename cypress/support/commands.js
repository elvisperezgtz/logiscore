/**
 * Este comando ejecuta el endpoint /connect/token
 */
Cypress.Commands.add("get_token", () => {
  var token = "";
  cy.request({
    method: "POST",
    url:
      "https://logiscore-services-" +
      Cypress.env("env") +
      ".logisfashion.com/connect/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      grant_type: "password",
      client_id: "loadtest",
      client_secret: "secret",
      scope: "openid core",
      username: Cypress.env("username"),
      password: Cypress.env("password"),
    },
  }).then((response) => {
    token = response;

    return token;
  });
});

/**
 * Este comando ejecuta el endpoint /api/import/Inbounds
 */
Cypress.Commands.add("import_inbound", (poNumber) => {
  cy.request({
    method: "POST",
    url:
      "https://logisconnect-" +
      Cypress.env("env") +
      ".logisfashion.com/api/import/Inbounds",
    headers: {
      "X-LF-ApiKey": Cypress.env("apikey"),
      "Content-Type": "application/json",
    },
    body: [
      {
        poNumber: poNumber,
        supplier: {
          code: "H104",
          name: "HUB Logisfashion",
        },
        totalWeight: "60.120",
        weightUnit: "kg",
        totalCartons: "00006",
        billOfLading: "",
        expectedDate: "",
        priority: "",
        notes: "",
        lines: [
          {
            lineNumber: 10,
            sku: 300020212,
            expectedQuantity: 10,
            batchArticle: {
              batch: "lote1",
              startDate: "2021-08-18T07:50:04.184Z",
              endDate: "2021-08-18T07:50:04.184Z",
            },
            valueAddedOperations: "",
            itemBatchStatus: "",
            salePrice: "",
          },
        ],
      },
    ],
  });
});
/**
 * Este comando ejecuta el endpoint /api/warehouses/
 */


Cypress.Commands.add("import_inbound_id", (purchaseOrder, token) => {
  cy.request({
    method: "GET",
    url:
      "https://logiscore-services-" +
      Cypress.env("env") +
      ".logisfashion.com/api/warehouses/" +
      Cypress.env("warehouse") +
      "/clients/" +
      Cypress.env("client_code") +
      "/inbounds?state=-10,10,0,20,40,30&purchaseOrder=" +
      purchaseOrder +
      "&pageIndex=0&pageSize=30",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response;
  });
});
