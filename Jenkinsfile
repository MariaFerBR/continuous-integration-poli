pipeline {
    agent any

    stage('Install dependencies') {
        step {
            sh 'npm install'
        }
    }

    stage('Running tests') {
        step {
            sh 'set NODE_OPTIONS=--experimental-vm-modules && npx jest'
        }
    }
}