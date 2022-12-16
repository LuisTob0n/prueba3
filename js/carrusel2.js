jQuery(document).ready(function(){
    jQuery('.logos').owlCarousel({
  margin:20,
        

        loop:true,
lazyLoad : false,
nav:false,
           
         dots: false,
autoplay:false,
responsive:{
  0:{
      items:2
  },
  991:{
      items:3
  },
  1000:{
      items:5
  }
}
});
      });