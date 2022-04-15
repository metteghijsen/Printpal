/**
 * Registers the service worker.           
 */
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
    databaseURL: "https://printpal-fcd92-default-rtdb.firebaseio.com/"
  };
  

  /**
   * Initializes the Firebase app and returns the analytics and database objects.       
   * @param {firebase.Config} firebaseConfig - the Firebase configuration object.       
   * @returns {firebase.analytics.Analytics} - the analytics object.       
   * @returns {firebase.database.Database} - the database object.       
   */
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
    
    /**
     * Writes the user's message to the database.       
     * @param {string} message - the message to write to the database.       
     */
    function writeUserData(message) {
        message = document.getElementById('messageForm').value;
        set(ref(database, 'messages/' + message), {
          anonymousmessage: message,
        });
        console.log("Done");
      }
      

      /**
       * Adds a listener to the send button that writes the user's data to the database.       
       */
      window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
        document.getElementById("sendbutton").addEventListener("click", e => {
          console.log('nextpage')
          writeUserData();
        });
      });
      
