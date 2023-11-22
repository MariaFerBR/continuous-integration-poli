pipeline {
    agent any

    stage('Install dependencies') {
        step {
            sh 'npm inst'
        }
    }

    stage('Running tests') {
        step {
            sh 'npm test'
        }
    }
}