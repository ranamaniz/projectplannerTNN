import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAZFlTpnbRIF5Al6avW7_Aa-X43aeELzng",
    authDomain: "projectplan-the-net-ninja.firebaseapp.com",
    databaseURL: "https://projectplan-the-net-ninja.firebaseio.com",
    projectId: "projectplan-the-net-ninja",
    storageBucket: "projectplan-the-net-ninja.appspot.com",
    messagingSenderId: "893241072660",
    appId: "1:893241072660:web:1419ebbebf538052b25b01",
    measurementId: "G-G8ZRZPNJZP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  // firebase.analytics();


  export default firebase;
