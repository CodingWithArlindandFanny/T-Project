

for (let i = 0;i < users.length; i++) {
    if (regUsername == [i].username) {
        alert ("Already existing user");
    } 
}
// Log-In if passwords match and Emailaddress valid.  
if (regPassword === regRepeatpassword && regPassword != "" && regMail == true) {
    document.location.href = "index" ; userList.push({username: newUsername, password: newPassword})
} 
console.log(newPassword)
console.log(repeatPassword)
console.log(ValidateEmail)

if (newPassword != repeatPassword || newPassword == "") {
    alert ("Password invalid");
    }

/*Not shown on page, as login and registration are in one html now
backToLogin.onclick = function() {
    document.location.href = "LogIn.html"
};
*/
//Trigger Sign-up button when Enter key is pressed
document.getElementById("newUsername").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("newPassword").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("repeatPassword").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
// Check if email address is valid. All regular expretions start and end with slashes: / .. /
/*
Explanation for if argument: The sub-expression \w+([.-]?\w+)* is used to match the username in the email. 
It begins with at least one or more word characters including the underscore, 
equivalent to [A-Za-z0-9_]. , followed by . or - and . or - must follow by a word character (A-Za-z0-9_
*/
function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}