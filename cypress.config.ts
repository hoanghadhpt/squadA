const { defineConfig } = require("cypress");
let statusCode
let body 
module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'SQUAD A -- Smoke Test',
      embeddedScreenshots: false,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    e2e: {
      excludeSpecPattern: ['*.page.js', 'utils.js', '*.ts'],
      specPattern: 'cypress/e2e/**/*cy.{js,ts}',
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        on('task', {  
            setStatus: (val) => {
              statusCode = val
              return statusCode
            },
            getStatus: () => {
              return statusCode
            },
            setBody: (val) =>{
              body = val
              return body 
            },
            getBody: () =>{
              return body 
            }
          });
    },
    env:{
      baseUrl: "https://content.preview.scm.informagt.com",
      masterAPI : "/v1/graphql?client_id=master",
      farmprogressAPI: "/v1/graphql?client_id=farmprogress",
<<<<<<< HEAD
      scmDemoAPI: "/v1/graphql?client_id=scmdemo"
    },
    "video": false,
    "screenshotOnRunFailure": false
=======
      scmDemoAPI: "/v1/graphql?client_id=scmdemo",
      api_key: "bltace826a255a35e75", // content stack uid
      authtoken: "blte3b3bec3b2902ef6" // user login auth token
    }
      
>>>>>>> prepareData
    },
  },
  {
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 0
    }
  },
  {
    "compilerOptions": {
      "target": "es5",
      "lib": ["es5", "dom"],
      "types": ["cypress", "node"]
    },
    "include": ["**/*.spec.ts"]
  }
);


