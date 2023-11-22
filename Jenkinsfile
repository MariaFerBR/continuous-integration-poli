pipeline {
    agent any

    stage('Build') {
        step {
            sh 'npm install'
        }
    }

    stage('Tests') {
        step {
            sh 'set NODE_OPTIONS=--experimental-vm-modules && npx jest'
        }
    }
}