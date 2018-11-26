// Create array called users
var users = JSON.parse(localStorage.getItem("users"));
  
if(users === null){
  users = [];
  users.push(new User("Fanny1", "Fanny", "Lundgreen", "25", "falu18ab@student.cbs.dk", "1234", "34637"));
  users.push(new User("Arlind1", "Arlind", "Rexhepi", "24", "arre18ab@student.cbs.dk", "1234", "78493"));
  
}

                              /* LOGIN FUNCTIONALITY */
/****************************************************************************************/

// LOGIN Function to go through the User Data to match Username/Password
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
        localStorage.setItem("loggedInUser", users[i].userid);

        return true;
        }
    }
    
    //LOGIN  Variable to define the amount of wrong attempts you have
    // If Username or Password is not right than it counts down possible attempts
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

};

    
    
    //LOGIN Redirect user to new html after successful login
    document.getElementById('login-btn').addEventListener('click' , function(event){
    event.preventDefault()

    var check = getInfo();

    if(check){
      localStorage.setItem("users",JSON.stringify(users));
      window.location.href = 'webshop.html';
    }
    })
    
    
                            /* REGISTRATION FUNCTIONALITY */
/****************************************************************************************/
    

//REGISTRATION Signup Validation 
document.getElementById("createaccount").addEventListener("click", function() {
    username = document.getElementById("regUsername").value;
    firstname = document.getElementById("regFirstName").value;
    lastname = document.getElementById("regLastName").value;
    age = document.getElementById("regAge").value;
    email = document.getElementById("regEmail").value;
    password = document.getElementById("regPassword").value;
    repeatpassword = document.getElementById("regRepeatpassword").value;
    var userid = Math.floor(Math.random()*100000)
    

    if(validator()){

        console.log("VALIDATION RETURNS TRUE");
        
        users.push(new User(username, firstname, lastname, age, email, password, userid));

        console.log(users);
        localStorage.setItem('users',JSON.stringify(users));
        
        document.getElementById('registerbox').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';

    }else {
        console.log("Does not work");
        return;
    }

});
        

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

function validateInput(userInput, regExp) {
    var regex = new RegExp(regExp) 
    
    if(regex.test(userInput)){
        return true
    } else {
        return false
    }
}


                              /* DOM MANIPULATION */
/****************************************************************************************/
      
// Change View between Login & Register Page by blocking the registration form and setting the login form to "none"
document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('loginForm').style.display = 'none'
})

// EventListener that blocks the Login Form (=none)

document.getElementById('register-btn').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('loginForm').style.display = 'none'
});

// Change View between Login & Register Page & block the image displayed in the login page.
document.getElementById('register-btn').addEventListener('click', function(event) {
    document.getElementById('registerbox').style.display = 'block'
    document.getElementById('image').style.display = 'none'
})
