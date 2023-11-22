pipeline {
    agent any

    stage('Build') {
        step {
            echo 'Building...'
        }
    }

    stage('Tests') {
        step {
            sh 'set NODE_OPTIONS=--experimental-vm-modules && npx jest'
        }
    }
}