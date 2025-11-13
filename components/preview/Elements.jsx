'use client';
import React from 'react';
import { Autoplay, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/element.json';
function Elements() {
  const swiperOptions = {
    modules: [Pagination, Autoplay, Keyboard],
    slidesPerView: 1.6,
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
      1000: {
        slidesPerView: 1.6,
      },
    },
  };
  return (
    <section className="tc-elements-preview">
      <div className="container">
        <div
          style={{ position: 'relative' }}
          className="rotate-box"
          data-speed="1"
          data-lag="0.5"
        >
          <img src="/landing_page/assets/img/fav.png" alt="" className="icon" />
          <div className="rotate-circle fsz-22 fw-600 rotate-text">
            <svg className="textcircle" viewBox="0 0 500 500">
              <defs>
                <path
                  id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                ></path>
              </defs>
              <text>
                <textPath xlinkHref="#textcircle" textLength="900">
                  {' '}
                  solid solutions for your enykind of business - we serving
                  quality service -{' '}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="elements-slider">
          <Swiper {...swiperOptions}>
            {data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="img">
                  <img src={item} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Elements;
