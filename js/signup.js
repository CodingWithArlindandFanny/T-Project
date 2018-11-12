// Change View between Login & Register Page by blocking the registration form and setting the login form to "none"
document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('loginForm').style.display = 'none'
})

<<<<<<< HEAD
document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('jsimg').style.display = 'none'
})

document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('htmlimg').style.display = 'none'
})

document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('phytonimg').style.display = 'none'
})

=======
class ShoppingCart {
    constructor(){
        this.courses = [],
        this.totalAmount = 0
    }
}
>>>>>>> b0d29926dde039dbb64f228b041b1c088cad296f

class User {

    constructor(username, firstname, lastname, age, email, password){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.password = password;
        this.shoppingCart = new ShoppingCart();

    }  

}



// Create array called users
var users = JSON.parse(localStorage.getItem("users"));
  
if(users === null){
  users = [];
  users.push(new User("Fanny1", "Fanny", "Lundgreen", "25", "falu18ab@student.cbs.dk", "1234"));
  users.push(new User("Arlind1", "Arlind", "Rexhepi", "24", "arre18ab@student.cbs.dk", "1234"));
  localStorage.setItem("users",JSON.stringify(users));
}
  
// Define the buttons 
  var submit = document.getElementById('createaccount');
  var logout = document.getElementById('logout-btn');
  var register = document.getElementById ('register-btn');
  var login = document.getElementById('login-btn');

// Variable to define the amount of wrong attempts you have
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
            localStorage.setItem("loggedInUser", users[i].email);

            return true;
  
            
        }
    }

// If Username or Password is not right than it counts down possible attempts

// Variable to define the amount of wrong attempts you have
var attempt = 3;
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

// Signup Validation 

  function validateInput(userInput, regExp) {
    var regex = new RegExp(regExp) 
    
    console.log(regex);

    if(regex.test(userInput)){
        return true
    } else {
        return false
    }
}

function validator(){

    if(!validateInput(username, '^[a-zA-Z0-9]{5,10}$')){
        alert('Username must contain min 5 - max 10 characters')
        return false;
    }

    if(!validateInput(age, '[0-9]{2}$')){      
        return false;
    }

    if(!validateInput(email, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    if(!validateInput(password, '[a-zA-Z0-9]{4,8}$')){
        alert('Password must contain min 4 - 8 max charakters')
        return false;
    }

    return true;

}

document.getElementById("createaccount").addEventListener("click", function() {
    username = document.getElementById("regUsername").value;
    firstname = document.getElementById("regFirstName").value;
    lastname = document.getElementById("regLastName").value;
    age = document.getElementById("regAge").value;
    email = document.getElementById("regEmail").value;
    password = document.getElementById("regPassword").value;
    repeatpassword = document.getElementById("regRepeatpassword").value;

    if(validator()){

        console.log("VALIDATION RETURNS TRUE");
        users.push(new User(username, firstname, lastname, age, email, password));

        console.log(users);
        localStorage.setItem('users',JSON.stringify(users));
        
        
        document.getElementById('registerbox').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';


    }else {
        console.log("Does not work");
        return;
    }

});
        
// EventListener that blocks the Login Form (=none)

    document.getElementById('register-btn').addEventListener('click', function(event){
        event.preventDefault()
        document.getElementById('loginForm').style.display = 'none'
    });
    


// Redirect user to new html after successful login
      document.getElementById('login-btn').addEventListener('click' , function(event){
          event.preventDefault()

          var check = getInfo();

          if(check){
            window.location.href = 'webshop.html';
          }
      })



      



