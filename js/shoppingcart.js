

var storedCourses = JSON.parse(localStorage.getItem('lineItem'));
console.log(storedCourses)

class lineItemCourse {
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.buttonCart = "<button class='addTocart' name='add to cart' data-object='" + JSON.stringify(this) + "'>Add to Cart</button>";
    }


    
    createHTML(){
        return "<tr><td>"+ this.image + "</td><td>" + this.title + "</td><td>" + this.description + "</td><td>" + this.price + "</td></tr>";
       /* "<tr class='shopItem'><img width='200px' src=" + this.image + ">" +
        "<h1>"+ this.title + "</h1>" +
        "<p>" + this.description + "</p>" +
        "<p>Price: " + this.price + "</p>" +
        this.buttonCart +
        "</li>"*/
    }
}

var lineItemlist = [];
for (i=0; i < storedCourses.length; i++){
    lineItemlist.push( new lineItemCourse(storedCourses[i].image, storedCourses[i].title, storedCourses[i].description, storedCourses[i].price))

}

console.log(lineItemlist);

var html = "";
for (i=0; i < lineItemlist; i++){
    html += lineItemlist[i].createHTML();
}

table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;
