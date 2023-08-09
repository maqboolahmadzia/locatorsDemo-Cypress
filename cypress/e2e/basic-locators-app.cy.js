describe("CSS selectors with Cypress", () => {
    it("Login with Demo User on browser stack", () => {
    cy.visit("https://bstackdemo.com/signin");
    
    cy.get('#username').type("demouser{enter}")
    cy.get('#password').type("testingisfun99{enter}")
    cy.get('#login-btn').click();

    //cy.contains('iPhone 12 Pro Max').next().next().click()

    cy.contains('iPhone 12 Pro Max')
    .parent()
  .find('.shelf-item__buy-btn')
  .click();
 });
});