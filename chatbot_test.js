
//function openForm() {
//  var popup = document.getElementById("myForm");
//  popup.classList.toggle("show");
//}

// function myFunction() {
//   var popup = document.getElementById("myForm");
//   if (popup.style.display == "none") {
//       popup.style.display = "block";
//       $("#chatid").attr("src", "close_icon.png");  
//   }
//   else {
//       popup.style.display = "none";
//       $("#chatid").attr("src", "chat_icon.png");
//   }
// }
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("head_top");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$('#chatid').click(function() {
  $('#myForm').removeClass("hide");
  $('.close-button').removeClass("hide");
  $('.open-button').addClass("hide");
  $('.prompt_msg').addClass("hide");
  $('.close_btn').addClass("hide");
  $('#start_prompt').addClass("hide");
});

$('#closeid').click(function() {
  $('#myForm').addClass("hide");
  $('.close-button').addClass("hide");
  $('.open-button').removeClass("hide");
  $('.prompt_msg').removeClass("hide");
  $('.close_btn').removeClass("hide");
  
});

document.getElementById("start_prompt").onmouseover = function() {mouseOver()};
document.getElementById("start_prompt").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("closeme").style.display = "flex";
}

function mouseOut() {
  document.getElementById("closeme").style.display= "none";
}

$('#closeme').click(function(){
  $('#start_prompt').addClass("hide");
});

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}