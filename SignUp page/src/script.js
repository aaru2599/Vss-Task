

document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        apiKey: "AIzaSyB_8bfCPOU8AfxhrNALbrq8P_a0rc7fB7s",
        authDomain: "login-form-project-7d358.firebaseapp.com",
        databaseURL: "https://login-form-project-7d358-default-rtdb.firebaseio.com",
        projectId: "login-form-project-7d358",
        storageBucket: "login-form-project-7d358.appspot.com",
        messagingSenderId: "126631068781",
        appId: "1:126631068781:web:1fab205aa1fbc5cb0b2b64"
      };
 
    
    firebase.initializeApp(firebaseConfig);
    
    
    var loginFormDB = firebase.database().ref("loginForm");
    
    document.getElementById('loginForm').addEventListener('submit', submitForm);
    
    function submitForm(e) {
        e.preventDefault();
    
        var firstName =  document.getElementById("firstName").value;
        var middleName =  document.getElementById("middleName").value;
        var lastName =  document.getElementById("lastName").value;
        var contactNumber =  document.getElementById("contactNumber").value;
        var email =  document.getElementById("email").value;
        var dob =  document.getElementById("dob").value;
        var password =  document.getElementById("password").value;
        var password_two =  document.getElementById("password_two").value;
        var gitHub= document.getElementById("gitHub").value;
        var linkedIn= document.getElementById("linkedIn").value;


        // console.log(firstName, lastName, middleName,contactNumber, email, dob, password,password_two);
        if(validate()){
        saveMessages(firstName, lastName,middleName, contactNumber, email, dob, password,password_two,gitHub,linkedIn);
        document.getElementById('loginForm').reset();

        }
    }
    
    const saveMessages = (firstName, lastName,middleName, contactNumber, email, dob, password,password_two,gitHub,linkedIn) => {
        var newLoginForm = loginFormDB.push();
        newLoginForm.set({
            firstName: firstName,
            middleName:middleName,
            lastName: lastName,
            contactNumber: contactNumber,
            email: email,
            dob: dob,
            password: password,
            password_two : password_two,
            gitHub: gitHub,
            linkedIn: linkedIn
        })
        .then(() => {
           alert("login successfull");
         /*  document.getElementById('signupButton').addEventListener('click', function() {
            window.location.href = '/index.html';
        });
        */
           
           
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
          
        });
    }
    
  
    function validate() {
        var pass=document.getElementById("password").value
        var verifyPass=document.getElementById("password_two").value
        if(pass===verifyPass)
        return true
    else {
        alert("passWord not matched")
        return false
    }
    }
    
});



