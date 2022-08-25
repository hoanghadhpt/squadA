pipeline {
  agent any
  tools {
    nodejs "nodejs"
  }   
  stages {
    stage('Initialize') {
      steps {
        echo "Checked out git repository."
        sh "npm i"
      }
    }
    stage('Running') {
      steps {
        echo "Start cypress..."
        sh "npx cypress run --headless"
      }
    }

  }

  post { 
        always { 
            emailext( attachLog: true, body: "Please visit ${env.BUILD_URL} for further information", subject: "[Jenkins][Smoke Test] '${env.JOB_NAME}' #${env.BUILD_NUMBER} - ${env.BUILD_STATUS}", to: "ha.hoang@xpondigital.com")
        }
    }
}