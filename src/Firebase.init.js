// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from './Firebase.init'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy4pxARupyhVD5cALMH9Ams60M-by_sW8",
    authDomain: "genius-car-services-b759e.firebaseapp.com",
    projectId: "genius-car-services-b759e",
    storageBucket: "genius-car-services-b759e.appspot.com",
    messagingSenderId: "505827227464",
    appId: "1:505827227464:web:a2cc059ece08a1ebef657d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;