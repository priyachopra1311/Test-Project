
//function openForm() {
//  var popup = document.getElementById("myForm");
//  popup.classList.toggle("show");
//}

function myFunction() {
  var popup = document.getElementById("myForm");
  if (popup.style.display == "none") {
      popup.style.display = "block";
      $("#chatid").attr("src", "close_icon.png");  
  }
  else {
      popup.style.display = "none";
      $("#chatid").attr("src", "chat_icon.png");
  }
}