var allUsers = JSON.parse(localStorage.getItem("users"));
console.log(allUsers)



// var storedCourses: get all courses which are stored in lineItem 

var storedCourses = JSON.parse(localStorage.getItem('lineItem'));
console.log(storedCourses)


// We created a class for the items in the shoppingcart 

class lineItemCourse {
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.status = "<button class='removeFromCart' name='add to cart' data-object='" + JSON.stringify(this) + "'>Remove Course</button>";
    }


    
    createHTML(){
        return "<td> <img height='65px' src='" + this.image + "'></td><td>" + this.title + "</td><td>" + this.description + "</td><td>" + this.price + "</td>";
    }
}


// LineItemCourse to be displayed in shoppingcart as table; order of table as defined and sum total of prices; add on remove item button

//HTML
// 1. Create empty table with table header ---> Image, Title, Description, Price, Status
// 1.1 Add id/class to select elementbyID

// JS
// 1. get items from local storage to memory: JSON.parse XXXXXXXXXX
// 2. display items / rendern
// 2.1 Transform JS object into HTML: Create HTML element <tr>
    // Add HTML element <td> to <tr>
    // Add <td> content from lineItemCourse
// 3. Total amount needs to be calculated 
// 4. Add <tr> content for total amount


var lineItemlist = [];
for (i=0; i < storedCourses.length; i++){
    lineItemlist.push( new lineItemCourse(storedCourses[i].image, storedCourses[i].title, storedCourses[i].description, storedCourses[i].price))

}


// We defined the function to display the shopping cart in the shoppingcart.html

var displayShoppingCart = function() {

    // 1. parse all user array from localStorage
    // 2. find current user ffrom localStorage
    
    /*var currentUser = JSON.stringify(allUsers)
    localStorage.setItem('users',currentUser);

    for(i=0; i<allUsers.length; i++) {
        
        if(currentUser.email == allUsers[i].email) {
            
        }
    }

    // For dispayling

   // for(i=0; i < activeUser.shoppingCart.courses.length; i++) {

    //}*/


// Create Table of HTML 

    var tb = document.createElement('tr')
    tb.innerHTML = '<td>Image</td><td>Course Title</td><td>Description</td><td>Price</td>'
    document.getElementById('myTable').appendChild(tb)
 
    

 // Define var total and then loop through the lineitemlist 

    var total = 0;
    for (i=0; i < lineItemlist.length; i++){

 // create tr for lineitemlist; add total price at last (appendchild)

        var item = document.createElement('tr')
        item.innerHTML = lineItemlist[i].createHTML()
        console.log(item)
        document.getElementById("myTable").appendChild(item)
        total += lineItemlist[i].price
       
    }

    var sumTotal = document.createElement('tr')
    sumTotal.innerHTML = '<td>Total:</td><td></td><td></td><td> ' + total + 'DKK</td>'
    document.getElementById('myTable').appendChild(sumTotal)
}


// Here the function for displaying the Shopping cart is called!

displayShoppingCart()

