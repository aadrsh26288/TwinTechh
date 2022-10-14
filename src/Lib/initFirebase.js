// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import 'firebase/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from '@firebase/firestore'
import 'firebase/compat/storage'



const app = firebase.initializeApp({
  // apiKey: "AIzaSyC_NkDZ61_h3K9ckk9RVigDLYtVBqcR2_g",
  // authDomain: "learn-production-318fb.firebaseapp.com",
  // projectId: "learn-production-318fb",
  // storageBucket: "learn-production-318fb.appspot.com",
  // messagingSenderId: "657301254891",
  // appId: "1:657301254891:web:aaa53fd925849d06eb04ae",
  // measurementId: "G-HG6R8VWJ5W"


  apiKey: "AIzaSyBfBtqtZzKDfadCx5inAzogyAIA60-Zbs0",
  authDomain: "tech-twin.firebaseapp.com",
  projectId: "tech-twin",
  storageBucket: "tech-twin.appspot.com",
  messagingSenderId: "330583273480",
  appId: "1:330583273480:web:09d5bb8cf229b38aa861bd",
   databaseURL: "gs://tech-twin.appspot.com/img"
});


export const db = getFirestore(app);
export const auth = app.auth();

export default app;// = initializeApp(firebaseConfig);
