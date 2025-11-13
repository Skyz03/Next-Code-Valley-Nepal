$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-header-preview features slider -----------
    var swiper = new Swiper('.tc-header-preview .feat-slider', {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        speed: 15000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });


    // tc-testimonials-preview 
    var swiper = new Swiper('.tc-testimonials-preview .testimonials-slider', {
        // slidesPerView: 5,
        spaceBetween: 70,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1.2,
            },
            1200: {
                slidesPerView: 1.6,
            }
        }
    });

    // ------------ tc-footer-st4 imgs-slider -----------
    var swiper = new Swiper('.tc-features-preview .marq-slider', {
        slidesPerView: "auto",
        spaceBetween: 70,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 20000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });


    var swiper = new Swiper('.tc-elements-preview .elements-slider', {
        // slidesPerView: 5,
        spaceBetween: 100,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.elements-slider .swiper-pagination',
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
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1.4,
            },
            1200: {
                slidesPerView: 1.6,
            }
        }
    });

    // ------------ tc-footer-st3 -----------
    var swiper = new Swiper('.tc-footer-preview .marq-slider', {
        spaceBetween: 0,
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

});



// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
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

    // ------ live video background effect ------
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-live-preview",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.to(".tc-live-preview .live-card .bg-imgs .img1", {
        x: 0,
        y: -200,
        // scale: 1,
        duration: 15,
        // ease: "linear",
        delay: 1
    });

    // ----------

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-live-preview",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl2.to(".tc-live-preview .live-card .bg-imgs .img2", {
        x: 0,
        y: 200,
        // scale: 1,
        duration: 15,
        // ease: "linear",
        delay: 1
    });


    // ---- tc-accordion-preview ------

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-accordion-preview",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl3.to(".tc-accordion-preview .img-side .img img", {
        x: 0,
        y: -200,
        // scale: 1,
        duration: 15,
        // ease: "linear",
        delay: 1
    });

});
