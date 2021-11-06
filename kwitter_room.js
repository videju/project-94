const firebaseConfig = {
      apiKey: "AIzaSyAlJCu_r3lDFI0M6MTtR1G9LJUdZSPiT3c",
      authDomain: "adv-c93-letschat-web-app---1.firebaseapp.com",
      databaseURL: "https://adv-c93-letschat-web-app---1-default-rtdb.firebaseio.com",
      projectId: "adv-c93-letschat-web-app---1",
      storageBucket: "adv-c93-letschat-web-app---1.appspot.com",
      messagingSenderId: "862762770932",
      appId: "1:862762770932:web:0f222d902f83d4c60619a1"
    };
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase


user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "Welcome"+ user_name+"!";
function add_room() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
