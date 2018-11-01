// Push new Course into Product Catalogue
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


var courselist = [];
courselist.push(new Course("./img/html.png", "JavaScript", "42h Javascript Course for Everybody", "100DKK"));
courselist.push(new Course("", "Python","60h Python Course for Beginners", "2000DKK"));
courselist.push(new Course("", "CSS", "Style your Webpage","5000DKK"));
courselist.push(new Course("", "C++", "Learn Gaming Coding","500000DKK"));

var html = "";
for(i=0; i < courselist.length; i++ ){
    html += courselist[i].createHTML();
}
console.log('Hallo')

course = document.getElementById('shopItems');
course.innerHTML = html;


var buttons = document.getElementsByClassName('addToList');

// Get the list of wishes from localstorage and parse it from json to array
var wishes = [];

for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){

        // Push wish to array
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);

    // check if there are duplicates, etc.. 

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 
    //buttons[u].addEventListener("mouseover", function(e){
     //   alert("CLEVER");
    //});
}