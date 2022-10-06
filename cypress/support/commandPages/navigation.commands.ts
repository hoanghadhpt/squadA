export {};

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      verifyNavigationNotNull(contentType: string): Chainable<void>;
      verifyFooterNotNull(contentType: string): Chainable<void>;
    }
  }
}

// Repeated across test scripts
Cypress.Commands.add("verifyNavigationNotNull", (contentType: string) => {
  cy.task("getBody").then((resBody) => {
    const itemsArr = resBody.data["navigation"];
    cy.log(itemsArr);
    // expect(itemsArr['informaBar']).has.not.null
    expect(itemsArr["logo"].url).has.not.null;
    //expect(itemsArr['mainMenuItems']).has.not.null
    //expect(itemsArr['secondaryMenu']).has.not.null
    //expect(itemsArr['sideNavSections']).has.not.null
  });
});

Cypress.Commands.add("verifyFooterNotNull", (contentType: string) => {
  cy.task("getBody").then((resBody) => {
    const itemsArr = resBody.data["footer"];
    cy.log(itemsArr);
    // expect(itemsArr['informaBar']).has.not.null
    expect(itemsArr["logo"].url).has.not.null;
    //expect(itemsArr['mainMenuItems']).has.not.null
    //expect(itemsArr['secondaryMenu']).has.not.null
    //expect(itemsArr['sideNavSections']).has.not.null
  });
});
