$(function(){
  
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $('nav').addClass('navshrink');
      $('.navbar-nav .nav-item li').css('font-color','#ffffff');
    }
    else {
      $('nav').removeClass('navshrink');
      $('.navbar-nav .nav-item li').css('font-color', '#ffffff')

    }
  })
})