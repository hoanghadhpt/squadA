import {QueryPageContent} from "../../PageObjects/query_pages";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe(`Query page only`, () => {
  beforeEach(() => {});
  const defaultValue = require("../../fixtures/queryData/pageContent.json");
  const pageContentUrl = defaultValue.articleUrl;
  const queryBody = require("../../fixtures/inputAPI/PageContent/pageContentQuery.js");
  describe("Check Query all page only", () => { 
      context(`Query page content: Article`, () => {
        it(`Given I send the graphql query for ${pageContentUrl} `, () => {
          QueryPageContent.queryPageContentApi("masterAPI", queryBody);
          cy.get("@resBody").then((resBody) => {
            cy.task("setStatus", resBody.status);
            cy.task("setBody", resBody.body);
          });
        });

        it("Then I expected status code as 200", () => {
          //apiExpected.verifyStatus(200 )
          cy.verifyStatus(200);
        });

        it("And the items list should be not null", () => {
          //apiExpected.verifyBodyNotNull(testData.pageContent)
          cy.verifyBodyNotNull(defaultValue.pageContent);
        });
        describe("And Required Field should not be empty", () => {
          it("Title should not be empty", () => {
            //apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'title');
            cy.verifyRequiredFieldNotNull(defaultValue.pageContent, "title");
          });
        });
        it("And query not return error", () => {
          //apiExpected.verifyNoError(testData.pageContent);
          cy.verifyNoError();
        });
      });
    });
  });

