const firebase = require('firebase');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnCwsIxsAd_i354TOMKPXxUGZRw5mt208",
    authDomain: "api-demo-1334d.firebaseapp.com",
    projectId: "api-demo-1334d",
    storageBucket: "api-demo-1334d.appspot.com",
    messagingSenderId: "331053764078",
    appId: "1:331053764078:web:197cd095b5a86db0fd92ff",
    measurementId: "G-Q52KL4L6FJ"
  };


  firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app