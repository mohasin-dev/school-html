/*================================
            Services
=================================*/
$(function() { //short version of document.ready
    //animate on scroll
    new WOW().init();
});

/*================================
            Work
=================================*/
$(document).ready(function() {
    //magnific-popup
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*================================
            Team
=================================*/
$(document).ready(function() {
    //owl-carousel
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
    });
});

/*================================
            Testimonial
=================================*/
$(document).ready(function() {
    //owl-carousel
    $('#customers-testimonial').owlCarousel({
        items: 1,
        dots: true,
        //nav: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*================================
            Stars/Counter
=================================*/
$(document).ready(function() {
    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

/*================================
            Clients
=================================*/
$(document).ready(function() {
    //owl-carousel
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
        }
    });
});
/*================================
            Navbar/Navigation
=================================*/
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass('intezie-school-top-nav');
            //  $("#back-to-top").removeClass('btn-back-to-top');
        } else {
            //show nav
            $("nav").addClass('intezie-school-top-nav');
            //  $("#back-to-top").addClass('btn-back-to-top');
        }
    });
});




$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() < 200) {
            //hide nav
            //$("nav").removeClass('intezie-school-top-nav');
            $("#back-to-top").removeClass('btn-back-to-top');
        } else {
            //show nav
            //$("nav").addClass('intezie-school-top-nav');
            $("#back-to-top").addClass('btn-back-to-top');
        }
    });
});

//Scroll to top
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// $(document).ready(function() {
//     $("#back-to-top").click(function(event) {
//         event.preventDefault();
//         $("html, body").animate({ document.documentElement.scrollTop: 0 }, 5000,);
//         return false;
//     });
// });


//Smoth scrolling
// $(document).ready(function() {
//     $("a.smoth-scroll").click(function(event){
//         event.preventDefault();
//         //get/return id like #about, #work, #item and etc
//         var section = $(this).attr("href");
//         $("html, body").animate({
//             scrollTop: $(section).offset().top
//         }, 1250);
//     });
// });

/*================================
            Latest News
=================================*/
$(document).ready(function() {
    //owl-carousel
    $('#latest-news').owlCarousel({
        items: 4,
        dots: false,
        nav: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            },
        }
    });
});


//Close mobile menu onclick
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggler").click();
    });
});


$(function() {
    if (window.innerWidth < 991) {
        $("#services .container").addClass('container-fluid');
        $("#services .container").removeClass('container');
        $("#subscribe .container").addClass('container-fluid');
        $("#subscribe .container").removeClass('container');

        $("#main-footer .container").addClass('container-fluid');
        $("#main-footer .container").removeClass('container');
    }
});



$(function() {
    if (window.innerWidth < 767) {
        $("#about .container").addClass('container-fluid');
        $("#about .container").removeClass('container');
    }
});