
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
$('#chatid').click(function() {
  $('#myForm').removeClass("hide");
  $('.close-button').removeClass("hide");
  $('.open-button').addClass("hide");
});

$('#closeid').click(function() {
  console.log('Hello');
  $('#myForm').addClass("hide");
  $('.close-button').addClass("hide");
  $('.open-button').removeClass("hide");
});

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("head_top");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}