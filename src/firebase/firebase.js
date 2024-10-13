import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqER5lok40Be3CGRuqIDpjAMOveDozRkQ",
  authDomain: "blog-application-3cf64.firebaseapp.com",
  projectId: "blog-application-3cf64",
  storageBucket: "blog-application-3cf64.appspot.com",
  messagingSenderId: "569438845563",
  appId: "1:569438845563:web:e48f2c248931829464c0de"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireBaseAuth = firebaseApp.auth();

export { fireBaseAuth };