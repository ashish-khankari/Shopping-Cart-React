import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAYoPQOqEJQwMBVYRrWzruO8qZj8HuCvUE",
    authDomain: "cart-f298c.firebaseapp.com",
    databaseURL: "https://cart-f298c-default-rtdb.firebaseio.com",
    projectId: "cart-f298c",
    storageBucket: "cart-f298c.appspot.com",
    messagingSenderId: "967873465541",
    appId: "1:967873465541:web:2a37f7f3d1706fa9a034ac"
  };
  
//   const auth = firebase.auth();
// const analytics = firebase.analytics()
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

