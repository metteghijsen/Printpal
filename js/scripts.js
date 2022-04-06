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

import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
