import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import {sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

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
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const signupButton = document.getElementById("signup-button");
const errorTextfield = document.getElementById("error-textfield");

signupButton.addEventListener("click", function (event){
    /**
     * Checks if the username is shorter than 6 characters.
     * @param {string} username - the username to check.
     */
    if(username.value.length < 6){
        errorTextfield.style.display = "block";
        errorTextfield.innerHTML = "Username should be longer than 6 characters";
    }
    /**
     * Checks if the username is longer than 30 characters.
     * @param {string} username - the username to check
     */
    else if(username.value.length > 30){
        errorTextfield.style.display = "block";
        errorTextfield.innerHTML = "Username should not be longer than 30 characters";
    }
    else{
        errorTextfield.style.display = "none";
        /**
         * Checks if the password and password confirmation fields are equal.
         * @param {HTMLInputElement} password - the password field.
         * @param {HTMLInputElement} passwordConfirmation - the password confirmation field.
         * @returns {boolean} - true if the password and password confirmation fields are equal.
         */
        if(password.value === passwordConfirmation.value) {
            /**
             * Creates a new user with the given email and password.
             * @param {firebase.auth.Auth} auth - The firebase auth object.
             * @param {string} email - The email of the user.
             * @param {string} password - The password of the user.
             */
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    errorTextfield.style.display = "none";

                    /**
                     * Sends an email verification to the user.
                     * @param {firebase.User} user - The user to send the verification to.
                     */
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent
                        });

                    window.location.href = "index.html";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);

                    errorTextfield.style.display = "block";

                    /**
                     * A switch statement that maps error codes to their corresponding error messages.
                     * @param {number} errorCode - the error code to map to its corresponding error message.
                     * @returns {string} the error message corresponding to the error code.
                     */
                    switch (errorCode) {
                        case "auth/internal-error":
                            errorTextfield.innerHTML = "An internal server error has occurred. Please try again.";
                            break;
                        case "auth/invalid-email":
                            errorTextfield.innerHTML = "Please enter a valid email address.";
                            break;
                        case "auth/email-already-exists":
                            errorTextfield.innerHTML = "This email address already exists.";
                            break;
                        case "auth/email-already-in-use":
                            errorTextfield.innerHTML = "This email address is already in use.";
                            break;
                        case "auth/invalid-password":
                            errorTextfield.innerHTML = "Your password must consist of at least 6 characters.";
                            break;
                        case "auth/weak-password":
                            errorTextfield.innerHTML = "Your password must consist of at least 6 characters.";
                            break;
                        case "auth/missing-email":
                            errorTextfield.innerHTML = "Please enter a email address.";
                    }
                });
        }
        else{
            errorTextfield.style.display = "block";
            errorTextfield.innerHTML = "Passwords do not match.";
        }
    }
})




