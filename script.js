//For Login page FIXXXXXX
var login = $('.loginbutton');

login.on("click",check());

function check() {
  var username = $('.usernameplace');
  var password = $('.passwordplace');
  var form = $('.form');
  var divDisplay = $('.logindisplay');
if(username.val() === "SadieSiri" && password.val() === "1234"){
 alert(`Success! Environ's Homepage will now open up in a new tab`);
window.open("homepage.html");
} else if(username.val() === "Siri" && password.val()=== "56789"){
  alert(`Success! Environ will now open up in a new tab`);
  window.open("homepage.html");
}else if(username.val() === "Environ" && password.val()=== "12345"){
  alert(`Success! Environ will now open up in a new tab`);
  window.open("homepage.html");
  
}else {
 divDisplay.append(`<h1 style="duration: 50400s;">Username or Password is incorrect.</h1>`);
 
}
} 
// var loginbutton= $('.loginbutton');
// var form = $('.form');

// loginbutton.on("click",validateCredentials());

// function validateCredentials(){
//  var un = $('.usernameplace').val();
//  var ps= $('.passwordplace').val();
//  var usernameArray = ["Sadie", "Siri"];
//  var passwordArray= ["12345","67891"];
// if (un === usernameArray[0] && ps === passwordArray[0]){
//    console.log("okay");
//    window.open("homepage.html")
//  }else if(un === usernameArray[1] && ps ===passwordArray[1]){
//    console.log("works");
  
//  }else{
//    console.log("skipped to else statment")
//  }
//  }