// Register Click Function, if clicked on Registration Form becomes visible

document.getElementById('register-btn').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('registerbox').style.display = 'block'

})

document.getElementById('register-btn').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('loginForm').style.display = 'none'
})

// Create an Account and get redirected to Login Page
document.getElementById('createaccount').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    checkUsername(document.getElementById("regUsername").value);
    checkPassword(document.getElementById("regPassword").value);
    checkName(document.getElementById("regName").value);
    checkLastname(document.getElementById("regLastname").value);
    checkEmail(document.getElementById("regEmail").value);
    checkAge(document.getElementById("regAge").value);
    document.getElementById('registerbox').style.display ='none';
})

// Check for blank in registration (UserName) and stop redirect

function checkUsername(username) {
    if (username !==''){
       var validUsername = true;
    } else {
       var validUsername = false;
        alert('Please enter text in empty fields');
    }
    return validUsername; 
};

// Check for blank in registration (Password) and stop redirect

function checkPassword(password) {
    if (password !==''){
       var validPassword = true;
    } else {
       var validPassword = false;
        alert('Please enter text in empty fields');
    }
    return validPassword; 
};

// Check for blank in registration (Name) and stop redirect

function checkName(name) {
    if (name !==''){
       var validName= true;
    } else {
       var validName = false;
        alert('Please enter text in empty fields');
    }
    return validName; 
};
// Check for blank in registration (Lastname) and stop redirect

function checkLastname(Lastname) {
    if (Lastname !==''){
       var validLastname= true;
    } else {
       var validLastname = false;
        alert('Please enter text in empty fields');
    }
    return validLastname; 
};

// Check for blank in registration (Email) and stop redirect

function checkEmail(Email) {
    if (Email !==''){
       var validEmail= true;
    } else {
       var validEmail = false;
        alert('Please enter text in empty fields');
    }
    return validEmail; 
};

// Check for blank in registration (Age) and stop redirect

function checkEmail(Age) {
    if (Age !==''){
       var validAge= true;
    } else {
       var validAge = false;
        alert('Please enter text in empty fields');
    }
    return validAge; 
};

class User {

    constructor(username, firstname, lastname, age, email, password, userid){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.password = password;
        this.userid = null;

    }
   
}

// Create array called users
var users = JSON.parse(localStorage.getItem("users"));
console.log(users)
  
if(users === null){
  users = [];
  users.push(new User("Fanny1", "Fanny", "Lundgreen", "25", "falu18ab@student.cbs.dk", "1234", 1));
  users.push(new User("Arlind1", "Arlind", "Rexhepi", "24", "arre18ab@student.cbs.dk", "1234", 2));
}

  // In order to authenticate logged in user we create a variable and assign null
  var aunthenticatedUserId = null
  
  // Define the buttons 
  var submit = document.getElementById('createaccount');
  var logout = document.getElementById('logout-btn');
  var register = document.getElementById ('register-btn');
  var login = document.getElementById('login-btn');

  // Variabel to define the amount of wrong attempts you have
  var attempt = 3;
  
  // Function to go through the User Data to match Username/Password
  function getInfo() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == '' || password == '') {
        alert('Please provide login information')
        return false
    }

  // Loop that goes through the User Data to idetify right or wrong Username/Password
    for (let i = 0; i < users.length; i++) {

        if (username == users[i].username && password == users[i].password) {
          console.log (username + " is logged in!");
        
            //Push username from logged in User in the local storage 
            localStorage.setItem("loggedInUser", users[i].firstname);
  
            //Set authenticatedUserId to userId to enable to change aunthenticatedUserId = null into new value
            aunthenticatedUserId = users[i].userId;
            console.log (aunthenticatedUserId)

            return true;
  
            // If Username or Password is not right than it counts down possib atletempts
        }
    }


  // Disabling fields after 3 attempts.
  if( attempt == 0){    
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("login-btn").disabled = true;
  
  //Return false to get out of function
  return false;
  } else {
  
    attempt--;
    
    alert("You've entered a wrong username or password. You have left "+attempt+" attempt(s).");
    }
    return false;    
  }


document.getElementById("registerbox").addEventListener("click", function() {
    username = document.getElementById("regUsername").value;
    firstname = document.getElementById("regFirstName").value;
    lastname = document.getElementById("regLastName").value;
    age = document.getElementById("regAge").value;
    email = document.getElementById("regEmail").value;
    password = document.getElementById("regPassword").value;
  
    users.push(new User(username, firstname, lastname, age, email, password));
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users));
    document.getElementById('register-btn').addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('registerbox').style.display = 'block'
       
    })
    
    document.getElementById('register-btn').addEventListener('click', function(event){
        event.preventDefault()
        document.getElementById('loginForm').style.display = 'none'
    })
      });


    // Redirect user to new html after successful login
      document.getElementById('login-btn').addEventListener('click' , function(event){
          event.preventDefault()

          var check = getInfo();

          if(check){
            window.open('index2.html');
          }
      })





