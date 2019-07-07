$(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $('nav').addClass('navshrink');
    }
    else {
      $('nav').removeClass('navshrink');
    }
  })
})