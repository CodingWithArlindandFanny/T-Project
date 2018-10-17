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

})

document.getElementById('createaccount').addEventListener('click' , function(event){
    event.preventDefault()
    document.getElementById('registerbox').style.display = 'none'
})


//Sign Up Validation
document.getElementById('registerbox').addEventListener('')