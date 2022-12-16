jQuery(document).ready(function(){
    jQuery('.carrusel').owlCarousel({
  margin:0,
          animateOut: ' fadeOut',

        loop:true,
lazyLoad : false,
nav:true,
           
         dots: false,
autoplay:true,
responsive:{
  0:{
      items:1
  },
  991:{
      items:1
  },
  1000:{
      items:1
  }
}
});
      });