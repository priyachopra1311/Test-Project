
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