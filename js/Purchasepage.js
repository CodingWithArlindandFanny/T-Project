var usersLS = JSON.parse(localStorage.getItem("users"));
var users = []


if(usersLS === null){
    document.location.href = 'signup.html'
} else {
    for(i=0; i < usersLS.length; i++) {
        var tempUser = usersLS[i]
        var newUser = new User(tempUser.username, tempUser.firstname, tempUser.lastname, tempUser.age, tempUser.email, tempUser.password, tempUser.userid)

        for(k=0; k < tempUser.shoppingCart.length; k++){
            var tempShoppingCart = tempUser.shoppingCart[k]
            var course = new Course(tempShoppingCart.image,tempShoppingCart.title, tempShoppingCart.description, tempShoppingCart.price)
            
            newUser.shoppingCart.push(course)
        }

        users.push(newUser)
    }
}

var creditcards = JSON.parse(localStorage.getItem("creditcards"));
  
if(creditcards === null){
  creditcards = [];
}

var orders = JSON.parse(localStorage.getItem("orders"));

if(orders === null){
    orders = [];
}

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

    if(!validateInput(cname, '^[a-zA-Z0-9 -]')){
    
        return false;
    }

    if(!valid_credit_card(ccnum)){      
        alert('Credit Card not valid')
        return false;
    }

    if(!validateInput(deliveryemail, "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        alert('You have entered an invalid email address')
        return false;
    }

    console.log(cvv)
    if(!validateInput(cvv, "^[0-9]{3}$" )){
        alert('Enter a valid Card Verification Value')
        return false;
    }

    return true;

}


// Luhn algorithm
function valid_credit_card(value) {
    // accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
  
      // The Luhn Algorithm. It's so pretty.
      var nCheck = 0, nDigit = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
  }



                              /* DOM MANIPULATION */
/****************************************************************************************/

document.getElementById("Checkout-btn").addEventListener("click", function() {
    deliveryemail = document.getElementById("deliveryemail").value;
    cname = document.getElementById("cname").value;
    ccnum = document.getElementById("ccnum").value;
    cvv = document.getElementById("cvv").value;

    if(validator()){


        console.log("VALIDATION RETURNS TRUE");
            event.preventDefault()

        
            creditcards.push(new CreditCard (cname,ccnum, '15.11.2022'))

            localStorage.setItem('creditcards',JSON.stringify(creditcards));

      
// 1. Identify current user
            for (i=0; i < users.length; i++) {
                if(users[i].userid == localStorage.getItem('loggedInUser')){
                var activeUser = users[i]
                }
            }

            var orderTitles = []
            for (i=0; i < activeUser.shoppingCart.length; i++) {
                orderTitles.push(activeUser.shoppingCart[i].title)


            }

            orders.push(new Order ('001', activeUser.userid, Date.now(), orderTitles, 400))
            localStorage.setItem('orders', JSON.stringify(orders));

            activeUser.shoppingCart = []

            localStorage.setItem('users',JSON.stringify(users));
            // 3. empty shopping cart when order is created


              window.open("checkoutcompleted.html");
            }


    else {
        console.log("Does not work");
        return;
    }
});
