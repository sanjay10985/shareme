// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3DnFwr07V1G-_9bnQx-MLZRq-HGAxZ4",
  authDomain: "shareme-react-365916.firebaseapp.com",
  projectId: "shareme-react-365916",
  storageBucket: "shareme-react-365916.appspot.com",
  messagingSenderId: "656969426506",
  appId: "1:656969426506:web:c4f49cad49859cfb0ce8b3",
  measurementId: "G-GLG3FN3BGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);