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
                bat 'npm install'
            }
        }

        stage('Running tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}