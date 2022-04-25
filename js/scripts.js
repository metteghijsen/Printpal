if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function (registering) {
      // Registration was successful
      console.log(
        "Browser: Service Worker registration is successful with the scope",
        registering.scope
      );
    })
    .catch(function (error) {
      //The registration of the service worker failed
      console.log(
        "Browser: Service Worker registration failed with the error",
        error
      );
    });
} else {
  //The registration of the service worker failed
  console.log("Browser: I don't support Service Workers :(");
}

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
  apiKey: "AIzaSyBOAn8uYKrk80TdpijN8gI8GYAyBfZ0qrw",
  authDomain: "printpal-fcd92.firebaseapp.com",
  projectId: "printpal-fcd92",
  storageBucket: "printpal-fcd92.appspot.com",
  messagingSenderId: "4029039652",
  appId: "1:4029039652:web:4a023c24debd05c21004b1",
  // measurementId: "G-KMWRY5M814",
  databaseURL: "https://printpal-fcd92-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const db = getFirestore(app);

//Code for testing

//Writing data
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// try {
//   const docRef = await addDoc(collection(db, "messages"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

function writeUserData(messagebox) {
  messagebox = document.getElementById("messageForm").value;
  const docRef = addDoc(collection(db, "messages"), {
    message: messagebox,
  });
  console.log("Document written with ID: ", docRef.id);
}

// Reading data
// const querySnapshot = await getDocs(collection(db, "messages"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// This is for realtime database
/*Function for writing data to database*/

// function writeUserData(message) {
//   console.log(database);
//   // userId = document.getElementById('userId').value;;
//   message = document.getElementById("messageForm").value;
//   set(ref(database, "messages/" + message), {
//     anonymousmessage: message,
//   });
//   console.log("Done");
// }

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.getElementById("sendbutton").addEventListener("click", (e) => {
    writeUserData();
  });
});

//   const database = getDatabase(app);
const dbRef = ref(getDatabase(app));

/**
 * Gets the message from the database and displays it.
 * @returns None
 */
function getMessage() {
  // console.log(dbRef);
  get(child(dbRef, "messages/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapShotToArray(snapshot);
        // localStorage.setItem("snapshotdata", snapshot);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// function saveData(){
//   localStorage.getItem("snapshotdata");
//   console.log('snapshotdata');
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//   document.getElementById("message3").addEventListener("click", e => {
//       console.log("Saved Data")
//       saveData();
//   });
// });

/**
 * Shows a message in the message box.
 * @param {string} message - the message to show in the message box.
 * @returns None
 */
const showMessage = document.getElementById("message");
/**
 * Creates a new element with the given tag name and text content.
 * @param {string} tagName - the tag name of the element to create
 * @param {string} text - the text content of the element to create
 * @returns {HTMLElement} - the created element
 */
const message_val = document.createElement("h1");

/**
 * Takes in a snapshot and returns an array of the values in the snapshot.
 * @param {firebase.database.DataSnapshot} snapshot - the snapshot to convert to an array.
 * @returns {Array} - the array of values in the snapshot.
 */
function snapShotToArray(snapshot) {
  let returnArr = [];

  snapshot.forEach(function (childSnapshot) {
    let item = childSnapshot.val();
    returnArr.push(item);
  });

  const rnd = Math.floor(Math.random() * returnArr.length);
  console.log(rnd);

  const message = returnArr[rnd];
  console.log(message);

  message_val.innerHTML = message.anonymousmessage;
  showMessage.appendChild(message_val);

  // return returnArr;
}

/**
 * Adds an event listener to the button that will call the getMessage function.
 * @returns None
 */
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.getElementById("message2").addEventListener("click", (e) => {
    console.log("nextpage");
    getMessage();
  });
});
