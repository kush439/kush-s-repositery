var firebaseConfig = {
      apiKey: "AIzaSyBuBKbTWizg1F90NBz2QO23Cq7qBskVnpE",
      authDomain: "kwitter-app-1d33e.firebaseapp.com",
      databaseURL: "https://kwitter-app-1d33e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-1d33e",
      storageBucket: "kwitter-app-1d33e.appspot.com",
      messagingSenderId: "206961620752",
      appId: "1:206961620752:web:22f2468462ebe695e71795"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

var username=localStorage.getItem("Username");
var roomname=localStorage.getItem("Roomname");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({

            name:username,msg:msg,like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
window.location="index.html";
}