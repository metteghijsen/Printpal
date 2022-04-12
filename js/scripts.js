if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").then(function(registering){
        // Registration was successful
        console.log("Browser: Service Worker registration is successful with the scope",registering.scope);
    }).catch(function(error){
        //The registration of the service worker failed
        console.log("Browser: Service Worker registration failed with the error",error);
    });
} else {
    //The registration of the service worker failed
    console.log("Browser: I don't support Service Workers :(");
}



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
  const dbRef = ref(getDatabase(app));
      
function getMessage(){
    // console.log(dbRef);
    get(child(dbRef, 'messages/')).then((snapshot) => {
        if(snapshot.exists()){
            snapShotToArray(snapshot);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

const showMessage = document.getElementById('message');
const message_val = document.createElement("h1")

function snapShotToArray(snapshot) {
    let returnArr = [];

    snapshot.forEach(function(childSnapshot) {
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
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("message2").addEventListener("click", e => {
        console.log('nextpage')
        getMessage();
    });
});
