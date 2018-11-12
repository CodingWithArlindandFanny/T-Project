// Redirect user to Shopping Cart
document.getElementById('Checkout-btn').addEventListener('click' , function(event){
    event.preventDefault()
      window.open("checkoutcompleted.html");
    });

// Checkout details Validation 

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

    if(!validateInput(cname, '^[a-zA-Z0-9]{5,10}$')){
        alert('Username must contain min 5 - max 10 characters')
        return false;
    }

    if(!validateInput(ccnum, '[0-9]{2}$')){      
        return false;
    }

    if(!validateInput(deliveryemail, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    return true;

}

document.getElementById("Checkout-btn").addEventListener("click", function() {
    deliveryemail = document.getElementById("deliveryemail").value;
    cname = document.getElementById("cname").value;
    ccnum = document.getElementById("ccnum").value;

    if(validator()){

        console.log("VALIDATION RETURNS TRUE");
            event.preventDefault()
              window.open("checkoutcompleted.html");
            });


    }else {
        console.log("Does not work");
        return;
    }

});

