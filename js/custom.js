var typed = new Typed('.element', {
    strings: ['Mehadi Hasan Shuvo', 'Mehadi Hasan Shuvo', 'A Freelancer', 'A Front-end Developer', 'A Image Editor'],
    smartBackspace: true, // Default value
    loop: true,
    typeSpeed: 150,
  });

  (function($){
    new WOW().init();
})(jQuery);


$(function(){
    $('.hover-image').imgHover({
      radius: '10px',
      grow: false, 
      zoomScale: 1.2
    });

   
  });

  var trigger = document.getElementById('photoshop-t');

trigger.addEventListener('click', function(){
    photoshop.style.display = "flex";
})

var close = document.getElementById('p-close');

close.addEventListener('click', function(){
    photoshop.style.display = "none";
})


  var trigger = document.getElementById('wordpress-t');

trigger.addEventListener('click', function(){
  wordpress.style.display = "flex";
})

var close = document.getElementById('w-close');

close.addEventListener('click', function(){
  wordpress.style.display = "none";
})

var trigger = document.getElementById('web-design-t');

trigger.addEventListener('click', function(){
  webDesign.style.display = "flex";
})

var close = document.getElementById('wd-close');

close.addEventListener('click', function(){
  webDesign.style.display = "none";
})

//====== menu ======

var trigger = document.getElementById('t-bars');

trigger.addEventListener('click', function(){
  mainMenu.style.display = "block";
})

var close = document.getElementById('menu-close');

close.addEventListener('click', function(){
  mainMenu.style.display = "none";
})
var close = document.getElementById('menu-close');

close.addEventListener('click', function(){
  mainMenu.style.display = "none";
})

// ======== testimonial ============


$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<i class="bi bi-arrow-right arrow-icon right-icon"></i>',
  prevArrow: '<i class="bi bi-arrow-left arrow-icon left-icon"></i>',
});


//=========== wow js ===========


new WOW().init();




  