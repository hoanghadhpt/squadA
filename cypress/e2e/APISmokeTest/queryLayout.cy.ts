import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Smoke test`, () => {
    beforeEach(() => {
        
      })
    const queryGraphql = new queryPageContent()
    const apiExpected = new ApiShareObjects()
    const testData = require("../../fixtures/queryLayout.json");
    describe("Query page layout", () => {
        testData.forEach((testDataRow: any) => {
            const testData = {
                contentType: testDataRow.contentType,
                queryBody: testDataRow.queryBody,
                pageContent: testDataRow.pageContent
            };
        context(`Query page content: ${testData.contentType}`, ()=>{ 
            it(`Given I send the graphql query for ${testData.contentType} `, () =>{
                queryGraphql.queryPageContentApi('masterAPI',testData.queryBody)
                cy.get('@resBody').then(resBody => {
                    cy.task('setStatus', resBody.status);
                    cy.task('setBody', resBody.body)
                 });
            })
        
            it("Then I expected status code as 200", ()=>{
                //apiExpected.verifyStatus(200 ) 
                cy.verifyStatus(200 ) 
            })
            
            it("And Required Field should not be empty", () =>{
              if(testData.pageContent === 'navigation')  {
                    //apiExpected.verifyNavigationNotNull(testData.pageContent);
                    cy.verifyNavigationNotNull(testData.pageContent);
                }
                else{
                    //apiExpected.verifyFooterNotNull(testData.pageContent);
                    cy.verifyFooterNotNull(testData.pageContent);
                }
            })


            it("And query not return error", () => {
                //apiExpected.verifyNoError(testData.pageContent);
                cy.verifyNoError(testData.pageContent);
              });
        })
    })
    

})
})
