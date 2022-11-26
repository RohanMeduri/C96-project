const firebaseConfig = {
    apiKey: "AIzaSyDEcSiuaCdse4CA8HDL_PntBp0w2MjNSjA",
    authDomain: "c94-project-63ba9.firebaseapp.com",
    projectId: "c94-project-63ba9",
    storageBucket: "c94-project-63ba9.appspot.com",
    messagingSenderId: "90203216180",
    appId: "1:90203216180:web:1b871455d430118dd82d61"
  };

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  window.location = "Kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name - "+ Room_names);
row = "<div class='room_name'"
//End code
});});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
