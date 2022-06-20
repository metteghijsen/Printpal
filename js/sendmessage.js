/* Firebase Database Connection */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyC1F3VDs3kDs5gvZGk6OpE1FdiWjZzPDrw",
  authDomain: "printpal-2.firebaseapp.com",
  projectId: "printpal-2",
  storageBucket: "printpal-2.appspot.com",
  messagingSenderId: "660691678991",
  appId: "1:660691678991:web:ac00d9cf47d50ab71a307a",
  // measurementId: "G-KMWRY5M814",
  databaseURL: "https://printpal-2-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const db = getFirestore(app);

/*Function for writing data to database*/

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

function writeUserData(messagebox) {
  messagebox = document.getElementById("messageForm").value;
  const docRef = addDoc(collection(db, "messages"), {
    message: messagebox,
  });
  console.log("Document written with ID: ", docRef.id);
}

window.addEventListener("DOMContentLoaded", (event) => {
  // console.log("DOM fully loaded and parsed");
  document.getElementById("sendbutton").addEventListener("click", (e) => {
    console.log("nextpage");
    writeUserData();
    window.location.href = "message_send.html";
  });
});
