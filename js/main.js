
$(document).ready(function(){
    jQuery('#small-manu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.manu-place',

    });

    //Slider Area //
    $('.slider-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // Restomonia-Area//
    $('.tastomonia-active').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // partner-active//
    $('.partner-active').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1500,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 911,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

  //Counter Area//
  $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})