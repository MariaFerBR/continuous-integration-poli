pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm inst'
            }
        }

        stage('Running tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}