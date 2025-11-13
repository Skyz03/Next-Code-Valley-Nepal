'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react';

function Live() {
  // useEffect(() => {
  //   const tl1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.tc-live-preview',
  //       start: '-600 top',
  //       // end: "bottom bottom",
  //       scrub: true, // Smooth scrolling effect
  //     },
  //   });

  //   tl1.to('.tc-live-preview .live-card .bg-imgs .img1', {
  //     x: 0,
  //     y: -200,
  //     // scale: 1,
  //     duration: 15,
  //     // ease: "linear",
  //     delay: 1,
  //   });

  //   // ----------

  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.tc-live-preview',
  //       start: '-600 top',
  //       // end: "bottom bottom",
  //       scrub: true, // Smooth scrolling effect
  //     },
  //   });

  //   tl2.to('.tc-live-preview .live-card .bg-imgs .img2', {
  //     x: 0,
  //     y: 200,
  //     // scale: 1,
  //     duration: 15,
  //     // ease: "linear",
  //     delay: 1,
  //   });
  // }, []);
  return (
    <section className="tc-live-preview">
      <div className="container">
        <div className="seaction-head-preview text-center mb-70">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h6> live edit </h6>
              <h2> Best-in-class designs to get you started. </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="live-card">
              <a
                href="https://www.youtube.com/watch?v=qYgdnM3BC3g"
                className="play-btn"
                data-lity="video"
              >
                {' '}
                Play{' '}
              </a>
              <div className="bg-imgs">
                <img
                  src="/landing_page/assets/img/live.png"
                  alt=""
                  className="img1"
                />
                <img
                  src="/landing_page/assets/img/live2.png"
                  alt=""
                  className="img2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg-txt">
        <span className="txt"> Nucaz </span>
      </div>
    </section>
  );
}

export default Live;
