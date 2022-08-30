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
        always {
          def emailBody = '${SCRIPT, template="regressionfailed.groovy"}'
          echo 'Generate Report...'
            publishHTML(target : [allowMissing: true,
            alwaysLinkToLastBuild: false,keepAll: false,
            reportDir: '/var/jenkins_home/workspace/Smoke Test/cypress/reports/html/',
            reportFiles: 'index.html',
            reportName: 'HTML Report',
            reportTitles: 'HTML Report'])
            
            emailext(attachLog: true,mimeType: 'text/html',
            body: emailBody, 
            subject: "[Jenkins][Smoke Test] '${env.JOB_NAME}' #'${env.BUILD_NUMBER}' - ${env.BUILD_STATUS}", 
            to: 'ha.hoang@xpondigital.com')
        }
  }
}
