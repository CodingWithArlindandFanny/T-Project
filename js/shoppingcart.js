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



                              /*Create Table and print actual shopping cart*/
/****************************************************************************************/

// We defined the function to display the shopping cart in the shoppingcart.html

function displayShoppingCart() {
 

    var html = '<tr><td>Image</td><td>Course Title</td><td>Description</td><td>Price</td></tr>'

        for (i=0; i < users.length; i++){
            if(users[i].userid == localStorage.getItem('loggedInUser')){
            var activeUser = users[i]
            html += activeUser.printShoppingCart()
                
            }
        }

    
        
        document.getElementById('myTable').innerHTML = html
    } 

// Here the function for displaying the Shopping cart is called!

displayShoppingCart()
    
                              /* DOM MANIPULATION */
/****************************************************************************************/

// Redirect user to Purchase Page



    document.getElementById('purchase-btn').addEventListener('click' , function(event){
    
        window.location.href = "Purchasepage.html"
    });

   
