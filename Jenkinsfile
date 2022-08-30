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
          echo 'Generate Report...'
            publishHTML(target : [allowMissing: true,
            alwaysLinkToLastBuild: false,keepAll: false,
            reportDir: '/var/jenkins_home/workspace/Smoke Test/cypress/reports/html/',
            reportFiles: 'index.html',
            reportName: 'HTML Report',
            reportTitles: 'HTML Report'])
            
            emailext(attachLog: true, 
            body: 'Please visit http://152.69.209.1:8080/job/Smoke%20Test/HTML_20Report/ for success build\nNew Line', 
            subject: '[Jenkins][Smoke Test] '${env.JOB_NAME}' #'${env.BUILD_NUMBER}'', 
            to: 'ha.hoang@xpondigital.com')
        }
  }
}
