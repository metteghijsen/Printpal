import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

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
 * @param {firebase.app.App} firebaseApp - The firebase app.
 * @returns {firebase.auth.Auth} The authentication object.
 */
const auth = getAuth(firebaseApp);
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

/**
 * A function that handles the login process.
 * @param {firebase.auth.Auth} auth - The firebase authentication object.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */
loginButton.addEventListener("click", function (event){
signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in
        console.log("all good");

        console.log(email.value);
        console.log(password.value);
        window.location.href = "home.html";
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        console.log("werkt niet");

        console.log(email.value);
        console.log(password.value);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
})

/**
 * Adds an event listener to the signup button.
 */
signupButton.addEventListener("click", function (event){
    window.location.href = "signup.html";
});