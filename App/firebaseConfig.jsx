// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJoi5ST8hn63mwEuTPM9Mtk-Y_tE6qyGo",
  authDomain: "ev-charge-station-ae15a.firebaseapp.com",
  projectId: "ev-charge-station-ae15a",
  storageBucket: "ev-charge-station-ae15a.appspot.com",
  messagingSenderId: "81171656662",
  appId: "1:81171656662:web:ee23f56dd1a7e04f5bfe77",
  measurementId: "G-GMPX8EXNY2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
