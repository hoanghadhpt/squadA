import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Empty Spec`, () => {
    beforeEach(() => {
    })
    it("Just an empty step",()=>{
        
    });
})