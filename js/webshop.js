
var debug = 1;

// Push new Course into Product Catalogue

// this object into string for localstorage
class Course {
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.buttonCart = "<button class='addTocart' name='add to cart' data-object='" + JSON.stringify(this) + "'>Add to Cart</button>";
    }

    createHTML(){
        return "<li class='shopItem'><img width='200px' src=" + this.image + ">" +
        "<h1>"+ this.title + "</h1>" +
        "<p>" + this.description + "</p>" +
        "<p>Price: " + this.price + "</p>" +
        this.buttonCart +
        "</li>"
    }
}

// Push new Created Course into HTML 

var courselist = [];
courselist.push(new Course("", "CSS", "Style your Webpage",500));
courselist.push(new Course("", "C++", "Learn Gaming Coding",250));
courselist.push(new Course("", "Html", "Html Course for beginners",200));
courselist.push(new Course("", "PHP", "PHP Course Online",300));
courselist.push(new Course("", "Perl", "Exclusive Perl Course",500));
courselist.push(new Course("", "Ruby", "Advanced Ruby Course",200));
courselist.push(new Course("", "JavaScript", "42h Javascript Course", 200));
courselist.push(new Course("", "Python","60h Python Course", 200));




//  Define var html = "" as empty string; Loop through courselist; calls function createHTML

var html = "";
for(i=0; i < courselist.length; i++ ){
    html += courselist[i].createHTML();
}

// Display courses on html 
document.getElementById('shopItems').innerHTML = html



// Wait for user input & display courses accordingly
document.getElementById('mySearch').addEventListener('input', function(e) {
    
    var searchFilter = e.target.value
    html = ""
    
    var filteredCourseList = courselist.filter(function(course){
        return course.title.toLowerCase().includes(searchFilter.toLowerCase())
    })

    for(i=0; i < filteredCourseList.length; i++ ){
        html += filteredCourseList[i].createHTML();
    }

    document.getElementById('shopItems').innerHTML = html


})


var buttons = document.getElementsByClassName('addTocart')

var lineItem;
if (localStorage.getItem('lineItem')==null){
    lineItem = []
} else { 
    lineItem = JSON.parse(localStorage.getItem('lineItem'))
}
console.log(lineItem)

for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e) {
        for (j=0; j< lineItem.length; j++) {
            if (JSON.parse(this.dataset.object).title == lineItem[j].title){
                alert ("Course already added to Cart");
                return
            }
        }


        // Instead of pushing lineItems into localStorage,
        // push them to the shoppingCart Array of the current user


        //currentUser.shoppingCart.push(this.dataset.object)

        lineItem.push(JSON.parse(this.dataset.object));

        // Create new variable,  assign JSON.stringify(lineItem) as value to the variable; turns object lineItem to string
        var listString = JSON.stringify(lineItem);
        localStorage.setItem('lineItem',listString);
        
    });
}

//var filtercourses = function(){
//    for (i=0; i <)
//}

// Redirect user to Shopping Cart
document.getElementById('Shoppingcart-btn').addEventListener('click' , function(event){
    event.preventDefault()
      window.open("shoppingcart.html");
    });
