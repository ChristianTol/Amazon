import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPZTnSldBk0-Ep4xzveaHNmh6-uGMHN6c",
  authDomain: "fir-4686b.firebaseapp.com",
  projectId: "fir-4686b",
  storageBucket: "fir-4686b.appspot.com",
  messagingSenderId: "1076570922446",
  appId: "1:1076570922446:web:ff0b9326841a971f0d5f9f"
};

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

const db = app.firestore();

export default db;