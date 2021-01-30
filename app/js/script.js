$(document).ready(function() {
    $('.single-item').slick({
        // autoplay: true,
        // speed: 500,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable : true,
                    dots: false,
                    // autoplay: true,
                    // speed: 500
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
      });
    
    $('.res-slide').slick({
    dots: false,
        infinite: false,
        // speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable : false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable : true,
                    autoplay: true,
                    speed: 500
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    $('.vid-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        // slidesToScroll: 4,
        // draggable : false,
        // arrows: false,
    })

    $('.widget-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
    })
    
});
