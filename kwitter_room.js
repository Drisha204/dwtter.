 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBRvk8JeIRQUCG3OZ5mudvfm4z8QLvHTEU",
      authDomain: "dwitter-24fe8.firebaseapp.com",
      databaseURL: "https://dwitter-24fe8-default-rtdb.firebaseio.com",
      projectId: "dwitter-24fe8",
      storageBucket: "dwitter-24fe8.appspot.com",
      messagingSenderId: "15637619753",
      appId: "1:15637619753:web:92ce51babba10852fae838"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()

{
    localStorage.removeItem("room_name");  
    localStorage.removeItem("user_name"); 
    window.location="index.html";                           
}
