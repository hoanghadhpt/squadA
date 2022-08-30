pipeline {
  agent any
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Initialize') {
      steps {
        echo 'Checked out git repository.'
        sh 'npm i'
      }
    }
    stage('Running') {
      steps {
        echo 'Start cypress...'
        sh 'npx cypress run --headless'
      }
    }
  }

  post {
        success  {
          echo 'Generate Report...'
          publishHTML(target : [allowMissing: true,
                alwaysLinkToLastBuild: false,keepAll: false,
                reportDir: '/var/jenkins_home/workspace/Smoke Test/cypress/reports/html/',
                reportFiles: 'index.html',
                reportName: 'HTML Report',
                reportTitles: 'HTML Report'])

          emailext(attachLog: true, mimeType: 'text/html',
                body: '<h1>Finished: SUCCESS</h1><h2>There are no errors on this build</h2>',
                subject: "[Jenkins][Smoke Test] '${env.JOB_NAME}' #'${env.BUILD_NUMBER}' - Success!",
                to: 'ha.hoang@xpondigital.com')
        }
        failure {
          script {
            echo 'Failed...'
          }
        }
  }
}
