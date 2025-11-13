'use client';
import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Features() {
  const swiperOptions = {
    modules: [Keyboard, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 70,
    centeredSlides: true,
    keyboard: true,
    speed: 20000,
    autoplay: {
      delay: 1,
    },
    loop: true,
  };
  return (
    <section className="tc-features-preview">
      <div className="container">
        <div className="seaction-head-preview text-center mb-40">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h6 className="bg-orange1 text-white"> exclusive </h6>
              <h2> Exclusive features </h2>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            <div className="col-lg-4">
              <div className="feat-card">
                <div className="img">
                  <img
                    src="/landing_page/assets/img/feat1.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
                <div className="info">
                  <h5 className="fsz-24 fw-600 mb-30">
                    {' '}
                    Freedom to custom Header/Footer{' '}
                  </h5>
                  <p className="cr-666">
                    {' '}
                    Build and custom Header or Footer as way you like and show
                    it on anywhere you want{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feat-card">
                <div className="info">
                  <h5 className="fsz-24 fw-600 mb-30">
                    {' '}
                    <span className="cr-orange1 d-block"> Top-level </span>{' '}
                    creative blog layout{' '}
                  </h5>
                  <p className="cr-666">
                    {' '}
                    Content focused grid design, unique social elements, post
                    sharing function, author exposure, sticky newsletter and
                    much more.{' '}
                  </p>
                </div>
                <div className="img mb-0 mt-30">
                  <img
                    src="/landing_page/assets/img/feat2.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feat-card">
                <div className="img">
                  <img
                    src="/landing_page/assets/img/feat3.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
                <div className="info">
                  <h5 className="fsz-24 fw-600 mb-30">
                    {' '}
                    Free google and <br /> icon fonts{' '}
                  </h5>
                  <p className="cr-666">
                    {' '}
                    Easy to upload bespoke fonts directly into the Elementor
                    Builder, help you can effortlessly personalize your website
                    designs, eusuring they align with your branding and
                    aesthetic{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <h2> Life time update </h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2> Daily Demo </h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2> On time Support </h2>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/landing_page/assets/img/ab2_bg.png" alt="" className="bg" />
    </section>
  );
}

export default Features;
