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
  
  $('.card-body button').click(function(e){    
    // console.log(e.currentTarget.siblings)
    $('#parrafoCard').toggleClass('text-truncate')
    // console.log('Entra');
      
  })

})


