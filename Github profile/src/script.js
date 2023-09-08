

const firebaseConfig = {
    apiKey: "AIzaSyCnLdqiLsVwcreTZ7eyUKPagtwZDSIbbqw",
    authDomain: "login-form-607b5.firebaseapp.com",
    databaseURL: "https://login-form-607b5-default-rtdb.firebaseio.com",
    projectId: "login-form-607b5",
    storageBucket: "login-form-607b5.appspot.com",
    messagingSenderId: "117746395656",
    appId: "1:117746395656:web:908ff053ca2ff88cf2bfbd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to HTML elements
const googleSignInButton = document.getElementById("googleSignInButton");
const signOutButton = document.getElementById("signOutButton");
const userProfile = document.getElementById("userProfile");
const userNameSpan = document.getElementById("userName");
const userPhoto = document.getElementById("userPhoto");

// Create a provider for Google and Facebook sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();

const app = firebase.auth()
// Sign in with Google
//     const auth = getAuth();
//     auth.onAuthStateChanged((user) => {
//         console.log(user);
//     });

googleSignInButton.addEventListener('click', () => {
    app.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            displayUserData(user);
        })
        .catch((error) => {
            console.error(error);
        });

});
// Sign in with Facebook
// Display user data and show sign-out button
function displayUserData(user) {
    if (user) {
        // const userName = user.displayName;
        // const userEmail = user.email;
        // const userProfilePicture = user.photoURL;

        userNameSpan.textContent = user.displayName;
        userPhoto.src = user.photoURL;

        userProfile.style.display = "block";
        signOutButton.style.display = "block";
        googleSignInButton.style.display = "none";
    }
}

// Sign out
signOutButton.addEventListener("click", () => {
    app.signOut()
        .then(() => {
            userProfile.style.display = "none";
            signOutButton.style.display = "none";
            googleSignInButton.style.display = "block";
            facebookSignInButton.style.display = "block";
        })
        .catch((error) => {
            console.error(error);
        });
});
function performGoogleSearch() {
    var searchQuery = document.getElementById('githubName').value;
    var githubSearchUrl = ` https://api.github.com/users/${searchQuery}/repos`;
    // window.open(googleSearchUrl, '');
    fetch(githubSearchUrl)
        .then(function (resposnce) {
            return resposnce.json()
        })
        .then(function (resposnce) {
            repoData = resposnce;
            renderData(resposnce)


        })

}
function renderData(apiData) {
    const main = document.getElementById("fatchData")
    main.innerHTML = ""
    for (let i = 0; i < apiData.length; i++) {
        const userData = apiData[i]
        var udata = document.createElement("div")
        udata.innerHTML = `
 <div>
 <dl ">
    <dt>Repo Name</dt>                            
    <dd>${userData.name}</dd>
  </dl>
       
  <dl ">
    <dt>Repo details</dt>                            
    <dd></dd><dd> <a href = ${userData.html_url} > 
    repoDetails 
</a> </dd>
  </dl>
 <div/>
 `;
        main.appendChild(udata)
    }

}

document.getElementById('githubName').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        // alert('Enter key pressed!');
        performGoogleSearch();
    }
});