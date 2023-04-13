// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJaLGjyIzfV1qNzUfcd3btv_y319atrb4",
  authDomain: "rohanfirebase01.firebaseapp.com",
  projectId: "rohanfirebase01",
  storageBucket: "rohanfirebase01.appspot.com",
  messagingSenderId: "469514482578",
  appId: "1:469514482578:web:b9f480d737616d7615c74b",
  measurementId: "G-NGHX2CHD9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);