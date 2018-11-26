
var users = JSON.parse(localStorage.getItem("users"));
  
if(users === null){
  document.location.href = 'signup.html'
}

// Push new Created Course into HTML 

var courselist = [];
courselist.push(new Course("", "CSS", "Style your Webpage",500));
courselist.push(new Course("", "C++", "Learn Gaming Coding",250));
courselist.push(new Course("", "HTML", "Course for Beginners",200));
courselist.push(new Course("", "PHP", "PHP for Beginners",300));
courselist.push(new Course("", "Perl", "Introduction to Perl",500));
courselist.push(new Course("", "Ruby", "Advanced Ruby Course",200));
courselist.push(new Course("", "JavaScript", "42h Javascript Course", 200));
courselist.push(new Course("", "Python","60h Python Course", 200));

var html = "";
for(i=0; i < courselist.length; i++ ){
    html += courselist[i].createHTML();
}

// Display courses on html 
document.getElementById('shopItems').innerHTML = html

                             /* SEARCH FILTER FUNCTIONALITY */
/****************************************************************************************/


// Wait for user input & display courses accordingly
document.getElementById('mySearch').addEventListener('input', function(e) {
    
    var searchFilter = e.target.value
    //  Define var html = "" as empty string; Loop through courselist; calls function createHTML
    html = ""
    
    var filteredCourseList = courselist.filter(function(course){
        return course.title.toLowerCase().includes(searchFilter.toLowerCase())
    })
    
    for(i=0; i < filteredCourseList.length; i++ ){
        html += filteredCourseList[i].createHTML();
    }
    
    document.getElementById('shopItems').innerHTML = html
})

                             /* ADD TO CART FUNCTIONALITY */
/****************************************************************************************/


var buttons = document.getElementsByClassName('addTocart')

for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e) {
        
        for (i=0; i < users.length; i++){
           
            if(users[i].userid == localStorage.getItem('loggedInUser')){

                for(j=0; j < users[i].shoppingCart.length; j++) {

                    if (JSON.parse(this.dataset.object).title == users[i].shoppingCart[j].title){
                        alert ("Course already added to Cart");
                        return false
                    }
                }

                users[i].shoppingCart.push(JSON.parse(this.dataset.object))
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
        
    });
}
  
    
                                /* DOM MANIPULATION */
/****************************************************************************************/
    
// Redirect user to Shopping Cart
document.getElementById('Shoppingcart-btn').addEventListener('click' , function(){
    console.log('Test')
    window.location.href = "shoppingcart.html"
});
    