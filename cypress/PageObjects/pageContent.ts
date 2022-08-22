
class PageContent {
    verifyRequiredFieldNotNull(contentType: string, requiredField: string){
        cy.task('getBody').then(resBody =>{            
            const itemsArr = resBody.data[contentType].contents;
            itemsArr.forEach(item => {
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