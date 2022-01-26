// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "@firebase/app";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();