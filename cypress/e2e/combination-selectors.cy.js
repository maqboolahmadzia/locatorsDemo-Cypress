function login() {
    cy.visit("cypress/html/combine-selector.html");
}


//The descendant combinator matches a child, grandchild, and so on. 
//The child combinator selects elements that are direct children of another element.

describe("Combinatrion of selectors", () => {

    beforeEach(() => {
        login()
        //cy.wait(10000)
        //cy.get('.parent');
        cy.get('.parent').should('be.visible');
    })
    //Cypress test case using CSS child selector:

    it("should select direct child element using CSS child selector", () => {
        cy.get(".parent > .child").debug()
        cy.get(".parent > .child").should("contain", "This is a direct child");
        cy.get(".parent > .child").should("not.contain", "This is not a direct child");
      });

//      Cypress test case using CSS descendant selector:


it("should select descendant element using CSS descendant selector", () => {
    cy.get(".parent .child")

  cy.get(".parent .child").should("contain", "This is a direct child").debug();
  cy.get(".parent .child").should("contain", "This is not a direct child");
});

})