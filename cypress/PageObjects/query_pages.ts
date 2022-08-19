import cypress from "cypress";
import constant from "../fixtures/constant"
import queryApi from "../fixtures/queryAPi";
import { apiPost } from "./apiSend";
class queryPageContent extends queryApi {
    constructor() {
        super();
    }
    //query graphql
    
    queryPageContentApi(envAPI:string, queryBodyFile) {
        var requestUrl = `${constant.apiUrl}` + `${Cypress.env(envAPI)}`
        cy.log(Cypress.env(envAPI))
        var pageContentPath = `/inputAPI/${queryBodyFile}`
        cy.fixture(pageContentPath).then((bodyQuery) =>{
            apiPost.graphqlPost(constant.method_post, requestUrl, bodyQuery)
        })
    }
    

}
export default queryPageContent;