import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCL1K2avA9EFqlTqv5sWFieA2_8Tto2ewY",
  authDomain: "austin-mtb-trail-conditions.firebaseapp.com",
  databaseURL: "https://austin-mtb-trail-conditions.firebaseio.com",
  projectId: "austin-mtb-trail-conditions",
  storageBucket: "austin-mtb-trail-conditions.appspot.com",
  messagingSenderId: "701070692897",
  appId: "1:701070692897:web:deb170843cb0298a740960",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
