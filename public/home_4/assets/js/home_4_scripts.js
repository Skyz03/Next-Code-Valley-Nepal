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


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-features-st4 marq-slider -----------
    var swiper = new Swiper('.tc-features-st4 .marq-slider', {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 30000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });

    // ------------ tc-testimonials-st4 -----------
    var swiper = new Swiper('.tc-testimonials-st4 .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: {
            nextEl: '.testimonials-slider .swiper-next',
            prevEl: '.testimonials-slider .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
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

    if (window.innerWidth > 991) {

        // ------ cases colmns effect ------
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-cases-st4 .cases-colmn:nth-of-type(1)",
                start: "-500 top",
                // end: "bottom bottom",
                scrub: true // Smooth scrolling effect
            }
        });

        tl1.to(".tc-cases-st4 .cases-colmn:nth-of-type(1)", {
            x: 0,
            y: -200,
            scale: 1,
            duration: 15,
            ease: "linear",
            delay: 1
        });
        // -------
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-cases-st4 .cases-colmn:nth-of-type(2)",
                start: "-500 top",
                // end: "bottom bottom",
                scrub: true // Smooth scrolling effect
            }
        });

        tl2.to(".tc-cases-st4 .cases-colmn:nth-of-type(2)", {
            x: 0,
            y: 200,
            scale: 1,
            duration: 15,
            ease: "linear",
            delay: 1
        });

        // ------ cases imgs effect ------
        const caseCards = document.querySelectorAll(".tc-cases-st4 .case-card");
        caseCards.forEach((caseCard, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: caseCard,
                    start: "-650px top",
                    scrub: true
                }
            });

            const imgElement = caseCard.querySelector(".img img");
            tl.to(imgElement, {
                x: 0,
                y: 0,
                scale: 1.1,
                duration: 15,
                // ease: "linear",
                // delay: 1 + index * 0.5
            });
        });

        // ------ price cards effect ------
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-pricing-st4 .cards .price-card:nth-of-type(1)",
                start: "-500 top",
                // end: "bottom bottom",
                scrub: true // Smooth scrolling effect
            }
        });

        tl3.to(".tc-pricing-st4 .cards .price-card:nth-of-type(1)", {
            x: 0,
            y: 100,
            scale: 1,
            duration: 15,
            ease: "linear",
            delay: 1
        });
        // -------
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-pricing-st4 .cards .price-card:nth-of-type(2)",
                start: "-500 top",
                // end: "bottom bottom",
                scrub: true // Smooth scrolling effect
            }
        });

        tl4.to(".tc-pricing-st4 .cards .price-card:nth-of-type(2)", {
            x: 0,
            y: -100,
            scale: 1,
            duration: 15,
            ease: "linear",
            delay: 1
        });


        // ------ price cards effect ------
        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-subscribe-st4",
                start: "-500 top",
                // end: "bottom bottom",
                scrub: true // Smooth scrolling effect
            }
        });

        tl5.to(".tc-subscribe-st4 .circle", {
            x: 0,
            y: 0,
            scale: 1,
            rotationZ: 360,
            duration: 15,
            ease: "linear",
            delay: 1
        });

    }


});
