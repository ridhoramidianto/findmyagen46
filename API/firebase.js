// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: " AIzaSyC5o1kGNUkNq1H0JIvisyiRcivDZBHoyGo ",
    authDomain: "userauth-ca77e.firebaseapp.com ",
    databaseURL: "https://userauth-ca77e-default-rtdb.firebaseio.com/",
    projectId: "userauth-ca77e",
    storageBucket: "userauth-ca77e.appspot.com",
    messagingSenderId: "980763898211",
    appId: "1:980763898211:android:8ffc071d15979cb871e356"
};

firebase.initializeApp(firebaseConfig);

export default firebase;