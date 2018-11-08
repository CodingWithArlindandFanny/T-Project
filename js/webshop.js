
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
courselist.push(new Course("./img/javascript.png", "JavaScript", "42h Javascript Course for Everybody", 200));
courselist.push(new Course("./img/python.png", "Python","60h Python Course for Beginners", 200));
courselist.push(new Course("./img/css.png", "CSS", "Style your Webpage",500));
courselist.push(new Course("", "C++", "Learn Gaming Coding",250));




//  Define var html = "" as empty string; Loop through courselist; calls function createHTML

var html = "";
for(i=0; i < courselist.length; i++ ){
    html += courselist[i].createHTML();
}

// Display courses on html 
course = document.getElementById('shopItems');
course.innerHTML = html;

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

        lineItem.push(JSON.parse(this.dataset.object));

        // Create new variable,  assign JSON.stringify(lineItem) as value to the variable; turns object lineItem to string
        var listString = JSON.stringify(lineItem);
        localStorage.setItem('lineItem',listString);
        
    });
}

//var filtercourses = function(){
//    for (i=0; i <)
//}
