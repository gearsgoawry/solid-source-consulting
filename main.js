  const firebaseConfig = {
    apiKey: "AIzaSyDg9cEDKbuN4RmsLWp2w6CptHqOWG4W3kc",
    authDomain: "solid-source-dev.firebaseapp.com",
    databaseURL: "https://solid-source-dev-default-rtdb.firebaseio.com",
    projectId: "solid-source-dev",
    storageBucket: "solid-source-dev.appspot.com",
    messagingSenderId: "901335790559",
    appId: "1:901335790559:web:76deec7e791d5ba834ca6a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var servicesFormDB = firebase.database().ref('servicesForm');

// Listen for form submit
document.getElementById('servicesForm').addEventListener('submit', submitForm);


// Submit Form
function submitForm(e){
    e.preventDefault();

     // Get values from the form
     var services = getInputVal('services');
     var email = getInputVal('email');

     
     // Save message
     saveMessage(services, email);

}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(services, email){
    var newMessageRef =servicesFormDB.push();
    newMessageRef.set({
        services: services,
        email: email
    })
}