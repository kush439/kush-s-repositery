function adduser(){
    var username=document.getElementById("Username").value;
    localStorage.setItem("Username",username);
    window.location="kwitter_room.html";
}