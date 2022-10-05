import cypress from "cypress";

class APIPost {
  updateEntry(entry: any, uid: any, body: any) {
    cy.request({
      method: "PUT",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries/" +
        uid,
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        console.log(res);
      })
      .as("req");
  }

  updateBodyAndCreateEntry(entry: any, jsonBody: any) {
    var j1 = JSON.parse(jsonBody);
    // if (entry === "content_format") {
    //   j1.entry.title = `abcdbcbd`
    // } else {
    //   j1.entry.title = `[Automation Test] - ${entry} ${new Date().toLocaleString()}`;
    // }
    const files = [
      "_Keywords.txt",
      "_Contributor.txt",
      "_Subbrand.txt",
      "_ContentFormat.txt",
    ];
    const contents = [];

    cy.wrap(files)
      .each((file) => {
        cy.readFile("./cypress/fixtures/sampleData/entryUID/" + file).then(
          (data) => {
            contents.push(data);
          }
        );
      })
      .then(() => {
        // do whatever you want after all reading files is done

        j1.entry["keywords"][0]["uid"] = contents[0];
        j1.entry["contributor"][0]["uid"] = contents[1];
        j1.entry["subbrand"][0]["uid"] = contents[2];
        j1.entry["content_format"][0]["uid"] = contents[3];

        // updated uid for bodyJSON
        // create entry
        this.postCreateEntry(entry, j1);
      });
  }

  postMethod(requestMethod: string, requestUrl: string, jsonBody: any) {
    cy.request({
      method: requestMethod,
      url: requestUrl,
      // json: true,
      body: jsonBody,
    })
      .then((res) => {
        cy.wrap(res.status).as("status");
        cy.wrap(res.headers).as("headers");
        cy.wrap(res.body).as("body");
      })
      .as("req");
  }

  postCreateEntry(entry: any, body: any) {
    // update title
    var jBody = JSON.parse(body);
    cy.log(entry)
    if(entry === 'content_format'){
        jBody.entry.title = `[Auto] ${new Date().toLocaleTimeString()}`;
    }
    else{
        jBody.entry.title = `[Automation Test] - ${entry} ${new Date().toLocaleString()}`;
    }
    cy.request({
      method: "POST",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries?locale=en-us",
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
      body: jBody,
    }).then((res) => {
      cy.wrap(res.status).as("status");
      cy.wrap(res.headers).as("headers");
      cy.wrap(res.body).as("body");
      cy.wrap(res).as("resBody");
      // res.body.entry['uid']
      // write to file
      cy.log(entry);

      cy.writeFile(
        "./cypress/fixtures/sampleData/entryUID/" + entry + ".txt",
        res.body.entry["uid"]
      );
    });
  }

  postPublishUID(entry: any, uid: any) {
    cy.request({
      method: "POST",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries/" +
        uid +
        "/publish",
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
      body: {
        entry: {
          environments: ["preview", "staging"],
          locales: ["en-us"],
        },
        locale: "en-us",
        version: 1,
        scheduled_at: "2019-02-14T18:30:00.000Z",
      },
    })
      .then((res) => {
        cy.wrap(res.status).as("status");
        cy.wrap(res.headers).as("headers");
        cy.wrap(res.body).as("body");
      })
      .as("req");
  }

  postDeleteAnEntry(entry: any, uid: any) {
    cy.request({
      method: "POST",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries/" +
        uid +
        "?locale=en-us&delete_all_localized=true",
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        cy.wrap(res.status).as("status");
        cy.wrap(res.headers).as("headers");
        cy.wrap(res.body).as("body");
      })
      .as("req");
  }

  graphqlPost(requestMethod: string, requestUrl: string, queryBody: any) {
    cy.request({
      method: requestMethod,
      url: requestUrl,
      body: {
        query: queryBody,
      },
    })
      .then((res) => {
        cy.wrap(res).as("resBody");
        cy.wrap(res.status).as("status");
        // cy.task('setStatus', res.status);
        cy.wrap(res.headers).as("headers");
        cy.wrap(res.body).as("body");
      })
      .as("req");
  }

  postGetEntryByUID(entry: any, uid: string) {
    cy.request({
      method: "Get",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries/" +
        uid,
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        cy.wrap(res.status).as("CSstatus");
        cy.wrap(res.headers).as("CSheaders");
        cy.wrap(res.body).as("CSbody");
      })
      .as("req");
  }

  graphqlQuery(requestUrl, query, opName) {
    // cy.log(query);
    cy.request({
      method: "POST",
      url: requestUrl,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: { query },
    })
      .then((res) => {
        cy.wrap(res.status).as("graphstatus");
        cy.task("setStatus", "@graphstatus");
        cy.wrap(res.headers).as("graphheaders");
        cy.wrap(res.body).as("graphbody");
      })
      .as("graphreq");
  }

  postCreateTopic(entry: any, body: any) {
    cy.request({
      method: "POST",
      url:
        "https://eu-api.contentstack.com/v3/content_types/" +
        entry +
        "/entries?locale=en-us",
      headers: {
        api_key: Cypress.env("api_key"),
        authtoken: Cypress.env("authtoken"),
        "Content-Type": "application/json",
      },
      body: body,
    }).then((res) => {
      cy.wrap(res.status).as("status");
      cy.wrap(res.headers).as("headers");
      cy.wrap(res.body).as("body");
      cy.wrap(res).as("resBody");
      // res.body.entry['uid']
      // write to file
      cy.log(entry);

      cy.writeFile(
        "./cypress/fixtures/sampleData/entryUID/" + entry + ".txt",
        res.body.entry["uid"]
      );
    });
  }

  createTopics() {
    cy.log("Create topic Tertiary");
    cy.readFile(
      "./cypress/fixtures/sampleData/entryData/_TopicTertiary.txt"
    ).then((str) => {
      let a = JSON.parse(str);
      a.entry.title = `[Automation Test] - Topic Tertiary ${new Date().toLocaleString()}`;
      this.postCreateTopic("topic_tertiary", a);
      cy.readFile(
        "./cypress/fixtures/sampleData/entryUID/topic_tertiary.txt"
      ).then((uid) => {
        cy.log(`published uid `);
        this.postPublishUID("topic_tertiary", uid);
      });
    });
    cy.log("Create topic Secondary");
    cy.readFile(
      "./cypress/fixtures/sampleData/entryData/_TopicSecondary.txt"
    ).then((str) => {
      cy.readFile(
        "./cypress/fixtures/sampleData/entryUID/topic_tertiary.txt"
      ).then((uid) => {
        let a = JSON.parse(str);
        a.entry.title = `[Automation Test] - Topic Secondary ${new Date().toLocaleString()}`;
        a.entry.tertiary_topics[0].uid = uid;
        this.postCreateTopic("topic_secondary", a);
        cy.readFile(
          "./cypress/fixtures/sampleData/entryUID/topic_secondary.txt"
        ).then((uid) => {
          cy.log(`published uid `);
          this.postPublishUID("topic_secondary", uid);
        });
      });
    });
    cy.log("Create topic Primary");
    cy.readFile(
      "./cypress/fixtures/sampleData/entryData/_TopicPrimary.txt"
    ).then((str) => {
      cy.readFile(
        "./cypress/fixtures/sampleData/entryUID/topic_secondary.txt"
      ).then((uid) => {
        let a = JSON.parse(str);
        a.entry.title = `[Automation Test] - Topic Primary ${new Date().toLocaleString()}`;
        a.entry.secondary_topics[0].uid = uid;
        this.postCreateTopic("topic_primary", a);
        cy.readFile(
          "./cypress/fixtures/sampleData/entryUID/topic_primary.txt"
        ).then((uid) => {
          cy.log(`published uid `);
          this.postPublishUID("topic_primary", uid);
        });
      });
    });
  }
}

export default APIPost;
