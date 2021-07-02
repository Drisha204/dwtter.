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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function Send() 
{
    msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
 });
 document.getElementById("msg").value="";
}