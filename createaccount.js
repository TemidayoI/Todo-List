// // google

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCs7yjlNd_VFl-Jk16Wh4GNLy29BvSqp8c",
//   authDomain: "login-bcfb8.firebaseapp.com",
//   projectId: "login-bcfb8",
//   storageBucket: "login-bcfb8.appspot.com",
//   messagingSenderId: "1090240638119",
//   appId: "1:1090240638119:web:b60fb4a1597c0657fe3f82"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider(app);

// login.addEventListner('click', (e) => {
//   signInWithRedirect(auth, provider);

// //   getRedirectResult(auth)
// // .then((result) => {
// //   // This gives you a Google Access Token. You can use it to access Google APIs.
// //   const credential = GoogleAuthProvider.credentialFromResult(result);
// //   const token = credential.accessToken;

// //   // The signed-in user info.
// //   const user = result.user;
// //   // IdP data available using getAdditionalUserInfo(result)
// //   // ...
// // }).catch((error) => {
// //   // Handle Errors here.
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// //   // The email of the user's account used.
// //   const email = error.customData.email;
// //   // The AuthCredential type that was used.
// //   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
// // });
//   signInWithPopup(auth, provider)
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;

//   alert(user.displayName)
//   // IdP data available using getAdditionalUserInfo(result)
//   // ...
// }).catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.customData.email;
//   // The AuthCredential type that was used.
//   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...

//   alert(errorMessage);
// });

// });
// // google ends



// // SIGN IN start
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBXYrYUHY-clGMTa1CsvVRP7EUFj_Vb_jY",
//     authDomain: "sign-in-483ce.firebaseapp.com",
//     projectId: "sign-in-483ce",
//     storageBucket: "sign-in-483ce.appspot.com",
//     messagingSenderId: "527257311538",
//     appId: "1:527257311538:web:67d18c14861a9dfc219f2b"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);


//   const signUp = document.getElementById('signUp');
//   signUp.addEventListener("click", function (event) {
//   event.preventDefault()
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("Creating Account...")
//     window.location.href = "features.html";
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
//   })
// // SIGN IN Ends