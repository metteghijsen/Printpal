/* Firebase Database Connection */

import {
    initializeApp
}
    from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

import {
    getAnalytics
}
    from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update
}
    from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyBOAn8uYKrk80TdpijN8gI8GYAyBfZ0qrw",
    authDomain: "printpal-fcd92.firebaseapp.com",
    projectId: "printpal-fcd92",
    storageBucket: "printpal-fcd92.appspot.com",
    messagingSenderId: "4029039652",
    appId: "1:4029039652:web:4a023c24debd05c21004b1",
    // measurementId: "G-KMWRY5M814",
    databaseURL: "https://printpal-fcd92-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

/*Function for writing data to database*/

function writeUserData(message) {
    console.log(database);
    // userId = document.getElementById('userId').value;;
    message = document.getElementById('messageForm').value;
    set(ref(database, 'messages/' + message), {
        anonymousmessage: message,
    });
    console.log("Done");
}

/* window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("sendbutton").addEventListener("click", e => {
        console.log('nextpage')
        writeUserData();
    });
}); */