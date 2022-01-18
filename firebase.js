// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIkWQS3hI5YQrnmuft5WZginG3jO7ESnM",
    authDomain: "ensatelibrary.firebaseapp.com",
    projectId: "ensatelibrary",
    storageBucket: "ensatelibrary.appspot.com",
    messagingSenderId: "458893016808",
    appId: "1:458893016808:web:b745a049a181fb3cbdd35d",
    measurementId: "G-PE9YCD0935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const auths = auth()

// export { auths };