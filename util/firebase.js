const firebase = require('firebase');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDAhfxMRNc-l8wTXlAp7dQJeWKVGtD5i8g",
    authDomain: "cfe-seguridad.firebaseapp.com",
    databaseURL: "https://cfe-seguridad-default-rtdb.firebaseio.com",
    projectId: "cfe-seguridad",
    storageBucket: "cfe-seguridad.appspot.com",
    messagingSenderId: "850271867215",
    appId: "1:850271867215:web:4ae6e6549548c47570b53a",
    measurementId: "G-ZX59W9FZ62"
  };

  firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app