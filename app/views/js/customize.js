$(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('nav').addClass('navshrink');
      $('nav li.nav-item a').addClass('font-nav');
    }
    else {
      $('nav').removeClass('navshrink');
      $('nav li.nav-item a').removeClass('font-nav')
    }
  })

  $('.features .nav-item a').on('click', function () {
    $('.features .card').hide(400)
    $('.features .card').show('slow')

  })
  
  var contenidoCard = ''
  function ocultarMostrar(div) {
    if (div.innerHTML === 'Volver') {
      ocultar(); div.innerHTML = 'Leer más'
    }
    else {
      mostrar(); div.innerHTML = 'Volver'
    }
  }
  
  function ocultar() {
    contenidoCard = document.getElementById('textoCart').innerHTML
    document.getElementById('textoCart').innerHTML = contenidoCard.substring(0, 50) + '...'
  }
  function mostrar() {
    document.getElementById('textoCart').innerHTML = contenidoCard
  }
  
  $('#blogCarousel').carousel({
    interval: 5000
  });

  $('#news-slider').owlCarousel({
    items: 2,
    itemsDesktop: [1199, 2],
    itemsMobile: [600, 1],
    pagination: true,
    autoPlay: true
  });
})


