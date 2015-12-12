jQuery(document).ready(function() {
            // example 1
            $("ul.example1").simplecarousel({
                width:400,
                height:500,
                visible: 3,
                auto: 3000,
                next: $('.next'),
                prev: $('.prev')
            });
            
            // example 2
            $("ul.example2").simplecarousel({
                width:700,
                height:400,
                auto: 4000,
                fade: 400,
                pagination: true
            });

            /*munu hamburger*/
            $(".button").on("click", function(){
                $(".navig li").slideToggle("fast");
            });

            /* menu sticky */    
            var navBarTop = $('.second-section').offset().top;

            $(window).on('scroll', function(){
                if ($(window).scrollTop() > navBarTop - 11) {
                    $('.second-section').addClass('fixed');
                } else {
                    $('.second-section').removeClass('fixed');
                }   

                if ($(window).scrollTop() > navBarTop) {
                    $('.second-section').addClass('fixed-change');
                } else {
                    $('.second-section').removeClass('fixed-change');
                }
          });




            /* SMOOTH SCROLLING */
                 $('a[href*=#]:not([href=#])').click(function(){
                    $('html, body').animate({
                        'scrollTop': $( $.attr(this, 'href') ).offset().top
                    }, 500);
                    //return false;
                });



            /* SCROLL TOP BUTTON */


                $(window).on('scroll', function(){
                    if ($(this).scrollTop() > 200) {
                        $('.scrollToTop').fadeIn();
                    } else {
                        $('.scrollToTop').fadeOut();
                    }
                });

                $('.scrollToTop').click(function(){
                    $('html, body').animate({scrollTop : 0},600);
                    return false;
                });
        });
