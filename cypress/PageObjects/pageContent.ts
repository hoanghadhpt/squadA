
class PageContent {
    verifyRequiredFieldNotNull(contentType: string, requiredField: string){
        cy.task('getBody').then(resBody =>{            
            cy.get(resBody.data[contentType].contents ).then(item =>{
                if(contentType === 'page_event' && requiredField === 'publishedDate') {
                    expect(item).not.have.property(requiredField)
                }
                else{
                    expect(item).property(requiredField).not.null 
                }
            })        
        })
        
    }
}
export default PageContent