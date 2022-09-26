var admin = require("firebase-admin");

var serviceAccount = require("../path/api-demo-1334d-firebase-adminsdk-hex36-f045f75e63.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };