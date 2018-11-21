class User {

    constructor(username, firstname, lastname, age, email, password,userid){
        this.username = username,
        this.firstname = firstname,
        this.lastname = lastname,
        this.age = age,
        this.email = email,
        this.password = password,
        this.userid = userid,
        this.shoppingCart = []

    }  

    print(){
        console.log(this.firstname + ' ' + this.lastname + ' is ' + this.age)
    }


    printShoppingCart() {
        var html = ''

        if (this.shoppingCart.length == 0) {
            return html = 'Your shopping Cart is empty'
        }

        for(i=0; i<this.shoppingCart.length; i++){
            html += this.shoppingCart[i].print()
        }

        html += this.calculateTotalCart()

        return html
    }


    calculateTotalCart() {
        var total = 0
        for(i=0; i<this.shoppingCart.length; i++) {
            total += this.shoppingCart[i].price
        }
        return "<tr><td>Total Amount:</td><td></td><td></td><td>" + total + "</td></tr>";
    }



}
