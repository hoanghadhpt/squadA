import cypress from "cypress"
import { any } from "cypress/types/bluebird"


class ApiShareObjects {
    verifyStatusCode(statusCode, expectedStatusCode: number) {
            expect(statusCode).to.eq(expectedStatusCode)
    }

    verifyStatus(expectedStatusCode) {
        cy.task('getStatus').then((statusCode) => {
            expect(statusCode).to.eq(expectedStatusCode)
            
        })   
    }

    verifyItemsNotNull( body: any, contentType: string) {

        expect(body.data).to.have.all.keys(contentType)
        cy.wrap(body.data).its(contentType).then((itemList) =>{
            expect(itemList.items).not.null
        })
        
    }

    verifyBodyNotNull(contentType: string){
        cy.task('getBody').then( resBody => { 
            cy.wrap(resBody.data).its(contentType).then((itemList) =>{
                expect(itemList.items).not.null
            })  
        })  
    }
    verifyRequiredFieldNotNull(contentType: string, requiredField: string){
        cy.task('getBody').then(resBody =>{
            cy.wrap(resBody.data).its(contentType).then((pageData) =>{
                cy.wrap(pageData.items).as('itemList')
                cy.get('@itemList').each(element =>{
                    if(contentType === 'all_event' && requiredField === 'publishedDate') {
                        expect(element).not.have.property(requiredField)
                    }
                    else{
                        expect(element).property(requiredField).not.null
                    }
                })
                
            })
        })
        
    }

}

export default ApiShareObjects