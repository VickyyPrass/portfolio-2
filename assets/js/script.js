$(document).ready(function() {
    "use strict";
    // $(".carousel").carousel({
    //     interval: 5000,
    // });
    //? tambah efek  smooth scrolling ke semua link
    $("a").on("click", function(e) {
        if (this.hash !== "") {
            // Menghentikan aksi default tag a
            e.preventDefault();
            // mengambil tag a yang mempunyai #
            const hash = this.hash;

            // menambahkan animate untuk scroll smooth
            $("html,body").animate({
                    scrollTop: $(hash).offset().top - 15,
                },
                1250,
                "swing"
            );
        } // End if
    });


    //? menu navbar scroll
    document.onscroll = scrollNavbar;

    function scrollNavbar() {
        if ($(window).scrollTop() > 150) {
            $(" nav")
                .removeClass("static-top")
                .addClass("fixed-top")
                .addClass("navbar-dark bg-dark");
        } else {
            $(" nav")
                .removeClass("fixed-top")
                .addClass("static-top")
                .removeClass("navbar-dark bg-dark");
        } // End if
    }


    //? Typing
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    } // End if


    //? skill
    $(window).scroll(skill);

    function skill() {
        if ($(window).scrollTop() > 490) {
            // alert('ok');
            $(".about .text-content span.skill1").addClass("html");
            $(".about .text-content span.skill2").addClass("css");
            $(".about .text-content span.skill3").addClass("js");
        }
    }


    //? work
    $(window).scroll(startCounter);

    function startCounter() {
        if ($(window).scrollTop() > 2000) {
            $(window).off("scroll", startCounter);
            $('.stat-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(x) {
                        $(this).text(Math.ceil(x));
                    }
                });
            });
        }
    }


    //? Toogle show paragraf 
    $("#toogle-show").click(function() {
        const btnShow = $("button#toogle-show");
        btnShow.show(2000);
        $('p.hide').toggle("5000");
        if (btnShow.text() == "Read More...") {
            btnShow.html("Read Less...");
        } else {
            btnShow.html("Read More...");
        }
    });


    //? Lightbox Portfolio
    $('.venobox').venobox({
        'share': false,
        'spinner': 'wave'
    });


}); //? end jquery

//? Toogle show hamburger menu 
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul ');
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});