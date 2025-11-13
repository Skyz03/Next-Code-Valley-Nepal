'use client';
import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Footer() {
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
    <footer className="tc-footer-preview">
      <div className="main-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h6> Bundled Addons. Constant Updates. Premium Support. </h6>
              <h2> Impress your potential clients with stunning designs </h2>
              <div className="btns">
                <a
                  href="#"
                  className="butn bg-ln-orange1 rounded-pill text-white fsz-16 ms-4"
                >
                  {' '}
                  <span> Try Our Demos </span>{' '}
                </a>
                <a
                  href="#"
                  className="butn bg-ln-green1 rounded-pill text-white fsz-16 ms-4"
                >
                  {' '}
                  <span> Purchase Now - $19 </span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucaz{' '}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucaz{' '}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucaz{' '}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucaz{' '}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucaz{' '}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="slide-link">
              {' '}
              Nucazlk{' '}
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </footer>
  );
}

export default Footer;
