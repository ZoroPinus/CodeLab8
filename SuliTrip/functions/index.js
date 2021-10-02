const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => { functions.logger.info("Hello logs!", { structuredData: true }); response.send("My favorite emoji is \u{1F43C}"); });

exports.addUserToFireStore = functions.auth.user().onCreate((user) => {
    var userRef = admin.firestore().collection("users")
    return userRef.doc(user.uid).set({ displayName: user.displayName, emojis: '\u{1F43C}\u{1F33F}\u{2664},' });
});