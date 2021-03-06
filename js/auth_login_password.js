import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
// import {signInWithRedirect} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
// import {GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
// import {getRedirectResult} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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
const errorTextfield = document.getElementById("error-textfield");

/**
 * A function that handles the login process.
 * @param {firebase.auth.Auth} auth - The firebase authentication object.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */
loginButton.addEventListener("click", function (event) {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            window.location.href = "home.html";
            const user = userCredential.user;
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
                case "auth/missing-email":
                    errorTextfield.innerHTML = "Please enter a email address.";
                    break;
                case "auth/user-not-found":
                    errorTextfield.innerHTML = "This user does not exist."
                    break;
                case "auth/wrong-password":
                    errorTextfield.innerHTML = "The provided email address and password do not match."

            }
        });
})

/**
 * Adds an event listener to the signup button.
 */
signupButton.addEventListener("click", function (event) {
    window.location.href = "signup.html";
});

// const googleSignupButton = document.getElementById("google-signup-button");
// const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// googleSignupButton.addEventListener("click", function () {
//     signInWithRedirect(auth, provider)
//
//     getRedirectResult(auth)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access Google APIs.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//
//             // The signed-in user info.
//             const user = result.user;
//             window.location.href = "home.html";
//         }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });
// });