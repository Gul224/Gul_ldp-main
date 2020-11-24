pipeline {
  agent any
  stages {
    
    stage('build') {
      steps {
        sh 'yarn install'
        sh 'yarn test'
      }
    }
    stage('mochawesome-report') {
      steps {
        sh 'yarn combine-reports'
        sh 'yarn generate-report'
      }
    }
  }
}
