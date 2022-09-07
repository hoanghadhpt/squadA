import queryPageContent from "../../PageObjects/query_pages";
import ApiShareObjects from "../../PageObjects/apiSharedObjects";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe(`Query Modular Blocks`, () => {
  beforeEach(() => {});

  const queryGraphql = new queryPageContent();
  const apiExpected = new ApiShareObjects();
  const testData = require("../../fixtures/queryModulaBlocks.json");

  describe("Query Modular Blocks", () => {
    testData.forEach((testDataRow: any) => {
      const testData = {
        contentType: testDataRow.contentType,
        queryBody: testDataRow.queryBody,
        pageContent: testDataRow.pageContent,
      };
      context(`Query Modular Blocks: ${testData.contentType}`, () => {
        it(`Given I send the graphql query for ${testData.contentType} `, () => {
          queryGraphql.queryPageContentApi("masterAPI", testData.queryBody);
          cy.get("@resBody").then((resBody) => {
            cy.task("setStatus", resBody.status);
            cy.task("setBody", resBody.body);
          });
        });

        it("Then I expected status code as 200", () => {
          apiExpected.verifyStatus(200);
        });
        if (
          testData.pageContent !== "modular_content_spotlight" &&
          testData.pageContent !== "modular_event_promo" &&
          testData.pageContent !== "modular_newsletter_promo"
        ) {
          it("And the items list should be not null", () => {
            apiExpected.verifyBodyNotNull(testData.pageContent);
          });

          it("And Required Field should not be empty", () => {
            apiExpected.verifyRequiredFieldNotNull(
              testData.pageContent,
              "title"
            );
          });
        }

        it("And query not return error", () => {
          apiExpected.verifyNoError(testData.pageContent);
        });

        
      });
    });
  });
});
