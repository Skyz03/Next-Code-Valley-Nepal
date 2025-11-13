'use client';
import React from 'react';
import { Autoplay, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialsData from '@/data/inner_pages/testims';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Keyboard, Autoplay],
    slidesPerView: 2.6,
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
      1000: {
        slidesPerView: 2.6,
      },
    },
  };

  return (
    <section className="tc-pg-testimonials-st1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-60 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> What Client says? </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-slider">
          <Swiper {...swiperOptions}>
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testi-card">
                  <div className="user-rate">
                    <span className="icon">
                      <img src={testimonial.img} alt="" />
                    </span>
                    <div className="cont">
                      <p> Average {testimonial.rating} rating </p>
                      <div className="stars">
                        {[...Array(5)].map((star, index) => (
                          <i key={index} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="main-text">{testimonial.text}</h6>
                    <div className="user-info">
                      <h6> {testimonial.name} </h6>
                      <p> {testimonial.role} </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination text-center"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
