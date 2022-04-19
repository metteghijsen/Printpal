// import {initializeApp} from 'firebase/app';
// import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBOAn8uYKrk80TdpijN8gI8GYAyBfZ0qrw",
    authDomain: "printpal-fcd92.firebaseapp.com",
    projectId: "printpal-fcd92",
    storageBucket: "printpal-fcd92.appspot.com",
    messagingSenderId: "4029039652",
    appId: "1:4029039652:web:4a023c24debd05c21004b1",
    measurementId: "G-KMWRY5M814",
    databaseURL: "https://printpal-fcd92-default-rtdb.firebaseio.com/"
})

const auth = getAuth(firebaseApp);

const email = document.getElementById("email");
const password = document.getElementById("password");
const submitbutton = document.getElementById("signup-button");

const testTextbox = document.getElementById("test");

submitbutton.addEventListener("click", function (event){
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("all good");

            console.log(email.value);
            console.log(password.value);
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log("dikke kutzooi");

            console.log(email.value);
            console.log(password.value);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
})

