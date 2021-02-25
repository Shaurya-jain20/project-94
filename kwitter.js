var firebaseConfig = {
    apiKey: "AIzaSyBOpOTKY5DzsP-D8_0Y77Yy0Yao9obKK-Y",
    authDomain: "project-94-68041.firebaseapp.com",
    projectId: "project-94-68041",
    storageBucket: "project-94-68041.appspot.com",
    messagingSenderId: "932318204321",
    appId: "1:932318204321:web:f2098f3d74b6dd019f7be0",
    measurementId: "G-RVHZHXZB62"
  };
  firebase.initializeApp(firebaseConfig);
  function any()
{
    user_name = document.getElementById ("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}