'use client';
import React from 'react';
import { Autoplay, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialsData from '@/data/home_1/testims';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation, Keyboard, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
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
  };

  return (
    <section className="tc-testimonials-st1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="img mb-5 mb-lg-0 wow zoomIn slow"
              data-wow-delay="0.2s"
            >
              <img src="/home_1/assets/img/testi_img.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonials-slider">
              <Swiper {...swiperOptions}>
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi-card">
                      <div className="rate">
                        <span className="icon">
                          <img src={testimonial.icon} alt="" />
                        </span>
                        <div className="cont">
                          <p className="fsz-16 mb-2">
                            {' '}
                            Average {testimonial.rating}.00 rating{' '}
                          </p>
                          <div className="stars">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-main">{testimonial.text}</div>
                      <div className="user-inf">
                        <h6 className="fsz-24 fw-bold mb-2">
                          {' '}
                          {testimonial.name}{' '}
                        </h6>
                        <p className="fsz-16"> {testimonial.position} </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="arrows">
                <div className="swiper-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="swiper-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_1/assets/img/testi_bg.png" alt="" className="bg" />
    </section>
  );
}

export default Testimonials;
