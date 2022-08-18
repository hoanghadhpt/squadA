const { defineConfig } = require("cypress");
let statusCode
let body 
module.exports = defineConfig({
    e2e: {
      excludeSpecPattern: ['*.page.js', 'utils.js', '*.ts'],
      specPattern: 'cypress/e2e/**/*spec.{js,ts}',
      setupNodeEvents(on, config) { 
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
    }
      
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


