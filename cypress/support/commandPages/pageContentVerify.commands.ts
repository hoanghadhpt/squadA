
export {};

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            pageContentRequiredFieldNotNull(contentType: string, requiredField: string): Chainable<void>;
        }
    }
}

// Repeated across test scripts
Cypress.Commands.add('pageContentRequiredFieldNotNull', (contentType: string, requiredField: string) => {
  
  cy.log(contentType)
    if (contentType === "page_event") {
      //debugger
      cy.task("getBody").then((resBody) => {
        if (resBody.data["page_events"].content === undefined) {
          const contentBody = resBody.data["page_events"].items[0];
          cy.log(contentBody);
          expect(contentBody[requiredField]).not.null;
        } else {
          const contentBody = resBody.data["page_events"].content;
          cy.log(contentBody);
          expect(contentBody[requiredField]).not.null;
        }
      });
    } else {
      cy.task("getBody").then((resBody) => {
        if (resBody.data[contentType].content === undefined) {
          const contentBody = resBody.data[contentType].items[0];
          cy.log(contentBody);
          expect(contentBody[requiredField]).not.null;
        } else {
          const contentBody = resBody.data[contentType].content;
          cy.log(contentBody);
          expect(contentBody[requiredField]).not.null;
        }
      });
    }
});