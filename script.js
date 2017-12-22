$(document).ready(function() {
  console.log("Document ready");

});


$(window).on('scroll', function() {
   var fromTop = $(window).scrollTop();
   var ypos2 = $(window).innerHeight() - $('.nav_bar').outerHeight();
   $('.nav_bar').toggleClass('stuck', (fromTop > ypos2));
   $('.nav_bar').toggleClass('nav_color', (fromTop > ypos2));


 });
