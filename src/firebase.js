import firebase from 'firebase/app'


require("firebase/auth");
require("firebase/firestore");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyCPPNSZshpPH_GEcyGI4WILi8jSYIG5R4Y",
    authDomain: "flutter-varius-de545.firebaseapp.com",
    databaseURL: "https://flutter-varius-de545.firebaseio.com",
    projectId: "flutter-varius-de545",
    storageBucket: "flutter-varius-de545.appspot.com",
    messagingSenderId: "115735272750",
    appId: "1:115735272750:web:834c1354f76a47abeb6ebf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
    firebase, auth, db, storage, functions
}