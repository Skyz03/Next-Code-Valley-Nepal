'use client';
import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Keyboard, Autoplay],
    slidesPerView: 1.6,
    spaceBetween: 70,
    centeredSlides: true,
    speed: 1500,
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
      1000: {
        slidesPerView: 1.6,
      },
    },
  };
  return (
    <section className="tc-testimonials-preview">
      <div className="container">
        <div className="seaction-head-preview text-center mb-70">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="icon th-50 mb-50">
                <img src="/landing_page/assets/img/qoat.svg" alt="" />
              </div>
              <h6> testimonials </h6>
              <div className="rate-card d-lg-flex">
                <h2 className="text-lg-end">
                  {' '}
                  Why people <span className="cr-orange1">
                    {' '}
                    love Nucaz{' '}
                  </span>{' '}
                </h2>
                <div className="cont w-50 ps-lg-5 text-lg-start">
                  <div className="stars cr-orange1 mb-20">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="fsz-18 cr-666 mb-10">
                    {' '}
                    The #1 Best-Rated Top-Seller{' '}
                  </p>
                  <h5 className="fsz-18 fw-bold"> (1M+ Sales) Theme </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-slider">
          <Swiper {...swiperOptions}>
            {new Array(3)
              .fill('')
              .flat()
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="testi-card">
                    <div className="text fsz-30 mb-30 lh-3">
                      {' '}
                      “ This is one of the best themes I’ve worked with the last
                      couple of months. It’s up there in “popular themes” for
                      all the reasons you’re looking for. ”{' '}
                    </div>
                    <div className="user-card d-flex align-items-center">
                      <div className="avatar icon-50 rounded-circle overflow-hidden me-20 flex-shrink-0">
                        <img
                          src="/landing_page/assets/img/avatar.jpg"
                          alt=""
                          className="img-cover"
                        />
                      </div>
                      <div className="cont">
                        <p className="fsz-14 cr-orange1 mb-1"> Head of Idea </p>
                        <h6 className="fsz-18 fw-600"> Miranda H. Halim </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <img
        src="/landing_page/assets/img/line_blu.png"
        alt=""
        className="line"
      />
    </section>
  );
}

export default Testimonials;
