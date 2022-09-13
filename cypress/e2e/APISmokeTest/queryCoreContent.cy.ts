import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Smoke test`, () => {
    beforeEach(() => {
        
      })
    const queryGraphql = new queryPageContent()
    // const apiExpected = new ApiShareObjects()
    const testData = require("../../fixtures/queryCoreContentTypes.json");
    describe("Query page content", () => {
        testData.forEach((testDataRow: any) => {
            const testData = {
                contentType: testDataRow.contentType,
                queryBody: testDataRow.queryBody,
                pageContent: testDataRow.pageContent
            };
            
        context(`Query page content: ${testData.contentType}`, ()=>{ 
          
            it(`Given I send the graphql query for ${testData.contentType} `, () =>{
                queryGraphql.queryPageContentApi('masterAPI', testData.queryBody)
                cy.get('@resBody').then(resBody => {
                    cy.task('setStatus', resBody.status);
                    cy.task('setBody', resBody.body)
                 });
                
               
            })
            it("Then I expected status code as 200", ()=>{
                ApiShareObjects.verifyStatus(200 ) 
            })
            
            it("And the items list should be not null", () =>{
                ApiShareObjects.verifyBodyNotNull(testData.pageContent)     
            })
<<<<<<< Updated upstream
            it("And Title should not be empty", () =>{
                apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'title');
            })
            it("And Mobile headline should not be empty", () =>{
                apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'mobileHeadline');
            })
            it("And Published Date should not be empty", () =>{
                apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'publishedDate');
            })
            it("And Url should not be empty", () =>{
                apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'url');
            })
            it("And Body should not be empty", () =>{
                apiExpected.verifyRequiredFieldNotNull(testData.pageContent, 'body');
=======
            it("And Required Field should not be empty", () =>{
                ApiShareObjects.verifyRequiredFieldNotNullByTask(testData.pageContent, 'title');
                ApiShareObjects.verifyRequiredFieldNotNullByTask(testData.pageContent, 'publishedDate');
                
>>>>>>> Stashed changes
            })
        
           
        })
    })
    

})
})
