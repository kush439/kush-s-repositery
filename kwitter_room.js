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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='Gotoroom(this.id)'>"+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
                                                                                                      
function addroom(){
      var roomname=document.getElementById("Roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "Adding Room"
      });
      localStorage.setItem("Roomname",roomname);
      

 window.location="kwitter_page.html";

}

function Gotoroom(roomname){
    console.log(Rname) ;
    localStorage.setItem("Roomname",Rname);

    window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
window.location="index.html";
}