/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(function (){
    $("#card-members").owlCarousel({
        items: 3,
//        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
        responsive: {
            //0 or up wala width
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            920:{
            items:3
        }
            
        }
    });
    

});

