jQuery(document).ready(function(){
    jQuery('.noticias').owlCarousel({
  margin:20,
        

        loop:true,
lazyLoad : false,
nav:false,
           
         dots: true,
autoplay:false,
responsive:{
  0:{
      items:1
  },
  991:{
      items:2
  },
  1000:{
      items:3
  }
}
});
      });