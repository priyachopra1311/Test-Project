
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

$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};


$('#chatid').click(function() {
  $('#myForm').removeClass("hide");
  // $('.close-button').removeClass("hide");
  // $('.open-button').addClass("hide");
  $('.prompt_msg').addClass("hide");
  // $('.close_btn').addClass("hide");
  $('#start_prompt').addClass("hide");
  $('#chatid').animateRotate(360,200,null,function(){
    $('#chatid').parent().addClass('hide');
    $('#closeid').parent().removeClass('hide');
    })
  $('html, body').animate({
    scrollTop: $('.inner_form').offset().bottom + 150
}, 500);
});

$('#closeid').click(function() {
  $('#myForm').addClass("hide");
  // $('.close-button').addClass("hide");
  // $('.open-button').removeClass("hide");
  $('.prompt_msg').removeClass("hide");
  // $('.close_btn').removeClass("hide");
  $('#closeid').animateRotate(360,250,null,function(){
    $('#closeid').parent().addClass('hide');
    $('#chatid').parent().removeClass('hide');
    })
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




