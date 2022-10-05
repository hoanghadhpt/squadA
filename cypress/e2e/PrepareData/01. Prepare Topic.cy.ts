import queryPageContent from "../../PageObjects/query_pages";
import ApiShareObjects from "../../PageObjects/apiSharedObjects";
import APIPost from "../../PageObjects/apiSend";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe(`Prepare Topics`, () => {
  beforeEach(() => {});
  const apiPost = new APIPost();
  const apiExpected = new ApiShareObjects();
  describe("Create Data for Content Stack", () => {
    it(`GIVEN I create Topic entries`, () => {
          apiPost.createTopics();
    });
  });
});
