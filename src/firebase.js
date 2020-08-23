import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAq9kbqaMblD5iWibsE4oKnY1dNr4TJ8UM",
    authDomain: "chat-app-62224.firebaseapp.com",
    databaseURL: "https://chat-app-62224.firebaseio.com",
    projectId: "chat-app-62224",
    storageBucket: "chat-app-62224.appspot.com",
    messagingSenderId: "885355981350",
    appId: "1:885355981350:web:39e1b70e32352a44aa94e7",
    measurementId: "G-VMBT9QMRW8"
};

// Initialize the app with firebase

const firebaseApp = firebase.initializeApp(firebaseConfig)

// Access firestore instance

const db = firebaseApp.firestore()

// Authentication

const auth = firebase.auth()

// Authentication with google

const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};

export default db;