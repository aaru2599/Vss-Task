// const firebaseConfig = {
//     apiKey: "AIzaSyB_8bfCPOU8AfxhrNALbrq8P_a0rc7fB7s",
//     authDomain: "login-form-project-7d358.firebaseapp.com",
//     databaseURL: "https://login-form-project-7d358-default-rtdb.firebaseio.com",
//     projectId: "login-form-project-7d358",
//     storageBucket: "login-form-project-7d358.appspot.com",
//     messagingSenderId: "126631068781",
//     appId: "1:126631068781:web:1fab205aa1fbc5cb0b2b64"
// //   };



// // firebase.initializeApp(firebaseConfig);

// // const googleSignInButton=document.getElementById("googleSignInButton").value;
// // const facebookSignInButton=document.getElementById("facebookSignInButton").value;
// // const signOut=document.getElementById("signOut").value

// // googleSignInButton.addEventListener('click',()=>{
// //     const provider=new firebase.auth.GoogleAuthProvider();
// //     firebase.auth().signInWithPopup(provider)
// //     .then((result)=>{
// //         const user=result.user;
// //         displayUserData(user)
// //     })
// //     .catch((error)=>{
// //         console.error(error)
// //     })
// // })

// // facebookSignInButton.addEventListener('click',()=>{
// //     const provider=new firebase.auth.FacebookAuthProvider();
// //     firebase.auth().signInWithPopup(provider)
// //     .then((result)=>{
// //         const  user=result.user;
// //         displayUserData(user)
// //     })
// //     .catch((error)=>{
// //         console.error(error)
// //     })
// // })



// // function displayUserData(user){
// //     if(user){
// //         const userName=user.displayName;
// //         const userEmail=user.email;
// //         const userProfilePicture=user.photoURl
// //         signOut.style.display="block"
// //     }
// // }

// // signOut.addEventListener("click",()=>{
// //     firebase.auth().signOut()
// //     .then(()=>{
// //         signOut.style.display="none";
// //     })
// //     .catch((error)=>{
// //         console.error(error)
// //     })


// // })


// const firebaseConfig = {
//     apiKey: "AIzaSyB_8bfCPOU8AfxhrNALbrq8P_a0rc7fB7s",
//     authDomain: "login-form-project-7d358.firebaseapp.com",
//     databaseURL: "https://login-form-project-7d358-default-rtdb.firebaseio.com",
//     projectId: "login-form-project-7d358",
//     storageBucket: "login-form-project-7d358.appspot.com",
//     messagingSenderId: "126631068781",
//     appId: "1:126631068781:web:1fab205aa1fbc5cb0b2b64"
// };

// firebase.initializeApp(firebaseConfig);

// const googleSignInButton = document.getElementById("googleSignInButton");
// const facebookSignInButton = document.getElementById("facebookSignInButton");
// const signOut = document.getElementById("signOut");

// googleSignInButton.addEventListener('click', () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then((result) => {
//             const user = result.user;
//             displayUserData(user);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });

// facebookSignInButton.addEventListener('click', () => {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then((result) => {
//             const user = result.user;
//             displayUserData(user);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });

// function displayUserData(user) {
//     if (user) {
//         const userName = user.displayName;
//         const userEmail = user.email;
//         const userProfilePicture = user.photoURL;
//         signOut.style.display = "block";
//     }
// }

// signOut.addEventListener("click", () => {
//     firebase.auth().signOut()
//         .then(() => {
//             signOut.style.display = "none";
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });
// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
  
//     apiKey: "AIzaSyB_8bfCPOU8AfxhrNALbrq8P_a0rc7fB7s",
//     authDomain: "login-form-project-7d358.firebaseapp.com",
//     databaseURL: "https://login-form-project-7d358-default-rtdb.firebaseio.com",
//     projectId: "login-form-project-7d358",
//     storageBucket: "login-form-project-7d358.appspot.com",
//     messagingSenderId: "126631068781",
//     appId: "1:126631068781:web:1fab205aa1fbc5cb0b2b64"
};

firebase.initializeApp(firebaseConfig);

// Get references to HTML elements
const googleSignInButton = document.getElementById("googleSignInButton");
const facebookSignInButton = document.getElementById("facebookSignInButton");
const signOutButton = document.getElementById("signOutButton");

// Sign in with Google
googleSignInButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            displayUserData(user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Sign in with Facebook
facebookSignInButton.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            displayUserData(user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Display user data and show sign-out button
function displayUserData(user) {
    if (user) {
        const userName = user.displayName;
        const userEmail = user.email;
        const userProfilePicture = user.photoURL;
        signOutButton.style.display = "block";
        console.log(`User Name: ${userName}`);
        console.log(`User Email: ${userEmail}`);
        console.log(`User Profile Picture: ${userProfilePicture}`);
    }
}

// Sign out
signOutButton.addEventListener("click", () => {
    firebase.auth().signOut()
        .then(() => {
            signOutButton.style.display = "none";
        })
        .catch((error) => {
            console.error(error);
        });
});
