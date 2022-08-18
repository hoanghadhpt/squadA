import { defineConfig } from 'cypress'
let statusCode
let body 
export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration 
  e2e: {
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
  }
})

