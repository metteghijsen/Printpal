const myJSON = '[{"id":"0", "message":"Message 1"}, {"id":"1", "message":"Message 2"}, {"id":"2", "message":"Message 3"}, {"id":"3", "message":"Message 4"}, {"id":"4", "message":"Message 5"}, {"id":"5", "message":"Message 6"}]';
// Log myJSON variable
console.log(myJSON);
// Parse Json dummy array
const obj = JSON.parse(myJSON);
// Log Json dummy array
console.log(obj);
// Get random number between 0 and 5
let randInt = obj[parseInt(Math.floor(Math.random() * obj.length))];
// Log random int
console.log(randInt);
// Get Message element
const message = document.getElementById('message');
message.innerHTML = randInt.message;
// Log message element
console.log(message);


function getMessage(){
    const dbRef = ref(getDatabase(app));
    console.log(dbref);
    get(child(dbref, "users/" + document.getElementById('userid').value)).then((snapshot) => {
        if(snapshot.exists()){
            console.log("tried");
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

