import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
  apiKey: "AIzaSyBr-h80GCcU7-eLi5OItAA_gNgry-9qcT4",
  authDomain: "booklog-app-23.firebaseapp.com",
  projectId: "booklog-app-23",
  storageBucket: "booklog-app-23.appspot.com",
  messagingSenderId: "1059318849206",
  appId: "1:1059318849206:web:e2d77c1c27a6f94a119017",
  measurementId: "G-L260PFG5H1",
});

export const analytics = getAnalytics(app);

export const auth = getAuth(app);
