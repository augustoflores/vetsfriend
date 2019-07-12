$(function(){
  
  $(window).scroll( function(){
    if ($(document).scrollTop() > 200){
      $('nav').addClass('navshrink');
      $('nav li.nav-item a').addClass('font-nav');
    }
    else {
      $('nav').removeClass('navshrink');
      $('nav li.nav-item a').removeClass('font-nav');
    }
  });

  $('.features .nav-item a').on('click', function(){
    $('.features .card').hide(400);
    $('.features .card').show('slow');

  });

  
})