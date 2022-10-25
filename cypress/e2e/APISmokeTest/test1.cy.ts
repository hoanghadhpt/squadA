import queryPageContent from "../../PageObjects/query_pages";
import ApiShareObjects from '../../PageObjects/apiSharedObjects';
import {moduleLatestQuery} from "../../fixtures/inputAPI/ModularBlocks/moduleLatest"
import {apiPost} from "../../PageObjects/apiSend"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})
const queryGraphql = new queryPageContent();
describe(`Log module test`, () => {
    it('case 1', ()=>{
        var moduleUid = "blt3954aaa800e4f5cd"
        var requestUrl = "https://content.staging.scm.informagt.com/v1/graphql?client_id=master"
        // var graphqlQuery = require("../../fixtures/inputAPI/ModularBlocks/moduleLatest.graphql")
        console.log(moduleLatestQuery)
        console.log(typeof(moduleLatestQuery))
        // queryGraphql.queryPageContentApi('masterAPI', moduleLatestQuery)
        apiPost.graphqlPost('POST', requestUrl, moduleLatestQuery)
        cy.get('@resBody').then(resBody => {
                expect(resBody.status).equal(200)
         });
        // cy.fixture("./inputAPI/ModularBlocks/moduleLatest.graphql").then(graphqlQuery =>{
        //     queryGraphql.queryPageContentApi('masterAPI',graphqlQuery)
        //     cy.get('@resBody').then(resBody => {
        //         expect(resBody.status).equal(200)
        //  });
    })
    })

