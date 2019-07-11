$(function(){
  
  $(window).scroll( function(){
    if ($(document).scrollTop() > 300){
      $('nav').addClass('navshrink');
      $('nav li.nav-item a').addClass('font-nav');
    }
    else {
      $('nav').removeClass('navshrink');
      $('nav li.nav-item a').removeClass('font-nav');

    }
  })
})