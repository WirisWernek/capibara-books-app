// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeCx79MV-XikZz05h4vgwuQ18wUq_mZv0",
  authDomain: "capibara-books.firebaseapp.com",
  projectId: "capibara-books",
  storageBucket: "capibara-books.firebasestorage.app",
  messagingSenderId: "841625210121",
  appId: "1:841625210121:web:a70c861a677323d13617d8",
  measurementId: "G-0Z6V8QBZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
