import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBu5iijAiXPxbXYNB_QwYwK3MVBE627HV0",
    authDomain: "crud-8bd6f.firebaseapp.com",
    projectId: "crud-8bd6f",
    storageBucket: "crud-8bd6f.appspot.com",
    messagingSenderId: "31965701140",
    appId: "1:31965701140:web:6e055ed86c8edbf6d37301"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
