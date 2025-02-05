(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('header-sticky');
        } else {
            $('.header').removeClass('header-sticky');
        }

        // Back to top button visibility
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Back to Top button click event
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Document Ready Functions
    document.addEventListener("DOMContentLoaded", function () {
        const subscribeBtn = document.querySelector(".subscribe-btn");
        const searchBtn = document.querySelector(".search button");
        const navbar = document.querySelector(".header");
        const navLinks = document.querySelectorAll(".nav-link");

        // Subscribe button animation
        subscribeBtn.addEventListener("click", function () {
            subscribeBtn.style.transform = "scale(1.2)";
            setTimeout(() => {
                subscribeBtn.style.transform = "scale(1)";
            }, 200);
            alert("Thank you for subscribing!");
        });

        // Search button click interaction
        searchBtn.addEventListener("click", function () {
            const searchInput = document.querySelector(".search input").value;
            if (searchInput.trim() === "") {
                alert("Please enter a search term!");
            } else {
                alert(`Searching for: ${searchInput}`);
            }
        });

        // Sticky navbar on scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

        // Smooth scrolling effect for nav links
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Fade-in animation for elements
        let elements = document.querySelectorAll(".fade-in");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 200);
        });

        // Category News Slider (Slick slider)
        $('.cn-slider').slick({
            autoplay: false,
            infinite: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 992, settings: { slidesToShow: 1 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } }
            ]
        });
    });

    // Dropdown on mouse hover (for larger screens)
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

})(jQuery);
