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

  /*RANDOMUSER */
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//       console.log(data);      
//     }
//   });
//   var user = data.name;
//   console.log(user);

 
// });

