// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPXFWQq9WPxJ1fdLTCN7LKnOuJVP4vfaQ",
    authDomain: "toytopia-3142e.firebaseapp.com",
    projectId: "toytopia-3142e",
    storageBucket: "toytopia-3142e.firebasestorage.app",
    messagingSenderId: "172926325203",
    appId: "1:172926325203:web:1112fae8a9f9f903929f26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);