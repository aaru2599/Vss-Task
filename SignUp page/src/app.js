document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        // Your Firebase configuration here
        apiKey: "AIzaSyB_8bfCPOU8AfxhrNALbrq8P_a0rc7fB7s",
        authDomain: "login-form-project-7d358.firebaseapp.com",
        databaseURL: "https://login-form-project-7d358-default-rtdb.firebaseio.com",
        projectId: "login-form-project-7d358",
        storageBucket: "login-form-project-7d358.appspot.com",
        messagingSenderId: "126631068781",
        appId: "1:126631068781:web:1fab205aa1fbc5cb0b2b64"
     
    };
    
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        // Sign in with Firebase Authentication
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login successful
                const user = userCredential.user;
                // Display a confirmation message
                showConfirmationMessage(`Welcome, ${user.email}! You are now logged in.`);
            })
            .catch((error) => {
                // Handle login errors (e.g., invalid email or password)
                alert("Login failed: " + error.message);
            });
    });
    
    function showConfirmationMessage(message) {
        // Create a confirmation message element
        const confirmationElement = document.createElement('div');
        confirmationElement.className = 'alert alert-success';
        confirmationElement.textContent = message;
        
        // Insert the message above the login form
        const formContainer = document.querySelector('.card-body');
        formContainer.insertBefore(confirmationElement, document.getElementById('loginForm'));
        
        // Clear the form
        document.getElementById('loginForm').reset();
        
        // Automatically remove the message after a few seconds (optional)
       
    }
});
