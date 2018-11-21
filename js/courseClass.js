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

    print(){
        return "<tr><td> <img height='65px' src='" + this.image + "'></td><td>" + this.title + "</td><td>" + this.description + "</td><td>" + this.price + "</td></tr>";
    }
}