//////////////////////////////////////////////////////////////////ejercicios jquery
$(document).ready(function () {    
    

// boton achicar agrandar q cambian css/class
    let parrafito = $('#resultado p')
    // $('#boton1').click(function () { 
        
    //     parrafito.addClass('display-4 ');
        
    // });

    // $('#boton2').click(function () { 
        
    //     parrafito.removeClass('display-4 ');
        
    // });

    $('#boton3').click(function () { 
        
        $(parrafito).toggleClass('display-4');
        
    });
   




//////simple slideshow

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});
////////////////////////////////////////////




/////////////acordeon1 verde///////////////////////////

$(".accordion_header").click(function(){
    $(".accordion_header").removeClass("active");
   $(this).addClass("active");
});
//////////////////////////////////////




/////////input/////////

$('#formularioNombre').submit(function (e) { 
    e.preventDefault();
    let nombreEscrito = $('#nombresillo').val();
    console.log(nombreEscrito);

});

//////////////////

});
