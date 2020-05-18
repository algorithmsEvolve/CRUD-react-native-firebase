import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQhYze9IIGh4t4380xEumw2oP1ihc-FpE",
  authDomain: "firstexpoproject-ba236.firebaseapp.com",
  databaseURL: "https://firstexpoproject-ba236.firebaseio.com",
  projectId: "firstexpoproject-ba236",
  storageBucket: "firstexpoproject-ba236.appspot.com",
  messagingSenderId: "982729906745",
  appId: "1:982729906745:web:05b6d6181de160a3300be8",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
