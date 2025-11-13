$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });

    // ----------- side menu -----------
    $(".side_menu_btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    $(".side_menu_style4 .clss").on("click", function () {
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

        // ----------- products -----------
        // Increment button click event
        $(".qt-plus").click(function() {
            var value = parseInt($(this).siblings(".qt").val()); // Get the current value
            $(this).siblings(".qt").val(value + 1); // Increment the value and set it
        });
        
        // Decrement button click event
        $(".qt-minus").click(function() {
        var value = parseInt($(this).siblings(".qt").val()); // Get the current value
        if (value > 0) {
            $(this).siblings(".qt").val(value - 1); // Decrement the value and set it
        }
        });
        


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc testimonials slider1 -----------
    var swiper = new Swiper('.tc-pg-testimonials-st1 .testimonials-slider', {
        slidesPerView: 2,
        spaceBetween: 25,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-pg-testimonials-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.6,
            }
        }
    });


    // ------------ price table marq text -----------
    var swiper = new Swiper('.price-table-pg-st1 .marq-text', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
    });


    // ------------ shop-det-pg-st1 slider -----------
    var galleryThumbs = new Swiper('.shop-det-pg-st1 .tc-pg-slider-st1 .gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        loopedSlides: 3, //looped slides should be the same
        // direction: 'vertical',
    });
    var galleryTop = new Swiper('.shop-det-pg-st1 .tc-pg-slider-st1 .gallery-top', {
        spaceBetween: 30,
        loop:false,
        loopedSlides: 3, //looped slides should be the same
        navigation: false,
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    

});



// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });


    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                duration: 2,
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
                // toggleActions: 'play none play reset'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    // ------ cases imgs effect ------
    const caseCards = document.querySelectorAll(".service-det-pg-st1 .img");
    caseCards.forEach((caseCard, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: caseCard,
                start: "-650px top",
                scrub: true
            }
        });

        const imgElement = caseCard.querySelector(".service-det-pg-st1 .img img");
        tl.to(imgElement, {
            x: 0,
            y: 0,
            scale: 1.5,
            duration: 15,
            // ease: "linear",
            // delay: 1 + index * 0.5
        });
    });

    // ------ case det imgs effect ------
    const caseCardsDet = document.querySelectorAll(".case-det-pg-st1 .img");
    caseCardsDet.forEach((caseCardDet, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: caseCardDet,
                start: "-650px top",
                scrub: true
            }
        });

        const imgElement = caseCardDet.querySelector(".case-det-pg-st1 .img img");
        tl.to(imgElement, {
            x: 0,
            y: 0,
            scale: 1.5,
            duration: 15,
            // ease: "linear",
            // delay: 1 + index * 0.5
        });
    });

    // ------ price cards effect ------
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".shop-pg-st1 .tc-pg-shop-banner-st1",
            start: "-500 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.to(".shop-pg-st1 .tc-pg-shop-banner-st1 .img img", {
        x: 0,
        y: 0,
        scale: 1.3,
        duration: 15,
        ease: "linear",
        delay: 1
    });

});
