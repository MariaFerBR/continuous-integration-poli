pipeline {
    agent any

    stages {
        stage("SCM Checkout"){
            steps{
            git 'https://github.com/MariaFerBR/continuous-integration-poli.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm inst'
            }
        }

        stage('Running tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}