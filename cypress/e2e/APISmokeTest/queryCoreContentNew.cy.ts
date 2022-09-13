import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Smoke test`, () => {
    beforeEach(() => {
        
      })
    const queryGraphql = new queryPageContent()
    const testData = require("../../fixtures/queryCoreContentTypes.json");
    describe("Query page content", () => {
        testData.forEach((testDataRow: any) => {
            const testData = {
                contentType: testDataRow.contentType,
                queryBody: testDataRow.queryBody,
                pageContent: testDataRow.pageContent
            };
            
        context(`Query page content: ${testData.contentType}`, ()=>{ 
            before('', ()=>{
                queryGraphql.queryPageContentApi('masterAPI', testData.queryBody)
                cy.get('@resBody').then(resBody => {
                    cy.task('setStatus', resBody.status);
                    cy.task('setBody', resBody.body)
                 });
            })
            describe(`Given I send the graphql query for ${testData.contentType} `, () =>{
                
                
                it("Then I expected status code as 200", ()=>{
                    ApiShareObjects.verifyStatus(200 ) 
                })
                
                it("And the items list should be not null", () =>{
                    ApiShareObjects.verifyBodyNotNull(testData.pageContent)     
                })
                it("And Required Field should not be empty", () =>{
                    ApiShareObjects.verifyRequiredFieldNotNull(testData.pageContent, 'title');
                    ApiShareObjects.verifyRequiredFieldNotNull(testData.pageContent, 'publishedDate');
                    
                })
            })
        
           
        })
    })
    

})
})
