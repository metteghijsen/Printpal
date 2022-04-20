import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

/**
 * Initializes the Firebase app.
 */
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

/**
 * Get the authentication object from the firebase app.
 * @param {firebase.app.App} firebaseApp - The firebase app object.
 * @returns {firebase.auth.Auth} The authentication object.
 */
const auth = getAuth(firebaseApp);
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupButton = document.getElementById("signup-button");

/**
 * Creates a new user with the given email and password.
 * @param {firebase.auth.Auth} auth - The authentication object.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */
signupButton.addEventListener("click", function (event){
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

