
class PageContent {
    verifyRequiredFieldNotNull(contentType: string, requiredField: string){
        cy.task('getBody').then(resBody =>{   
            const contentBody = resBody.data[contentType].content
            // cy.log(contentBody)
            expect(contentBody[requiredField]).not.null       
        })
        
    }
}
export default PageContent