import queryPageContent from '../../PageObjects/query_pages';
import ApiShareObjects from '../../PageObjects/apiSharedObjects';
import APIPost from '../../PageObjects/apiSend';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe(`Prepare Data`, () => {
    beforeEach(() => {})
    const apiPost = new APIPost()
    const apiExpected = new ApiShareObjects()
    const testData = require("../../fixtures/sampleData.json");
    describe("Create Data for Content Stack", () => {
        testData.forEach((testDataRow : any) => {
            const testData = {
                contentType: testDataRow.contentType,
                entryBody: testDataRow.entryData
            };
            context(`Create: ${
                testData.contentType
            }`, () => {
                it(`GIVEN I create entry for ${
                    testData.contentType
                } `, () => {
                    cy.fixture(testData.entryBody).then((data) => {
                        apiPost.updateBodyAndCreateEntry(testData.contentType, data)
                        cy.get('@resBody').then((data) => {
                            cy.task('setStatus', data.status);
                            cy.task('setBody', data.body)
                        })
                    })
                })

                it("Then I expected status code as 201", () => {
                    apiExpected.verifyStatus(201)
                })

                it(`AND I publish ${testData.contentType}`, () => {
                    cy.fixture(`/sampleData/entryUID/${testData.contentType}.txt`).then((data)=>{
                        apiPost.postPublishUID(testData.contentType, data);
                    })
                })
            })
        })


    })
})
