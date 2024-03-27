function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML=" Good morning, I am Snehal Paliwal";
    } 
    else if (h>=12 && h<18) {
        E.innerHTML+=" Good afternoon, I am Snehal Paliwal";
    } 
    else if (h>=18 && h<20) {
        E.innerHTML=" Good evening, I am Snehal Paliwal";
    } 
    else  {
        E.innerHTML="Good night, I am Snehal Paliwal";
    } 
}


function addYear() {
    var d = new Date();
    var y = d.getFullYear();

    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}
/*
function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreBTN").style.display = "none";
}
*/
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function validate(){
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("UserText");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() 
        || !userText.checkValidity()) {
            msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}



greetingFunc();

function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
 