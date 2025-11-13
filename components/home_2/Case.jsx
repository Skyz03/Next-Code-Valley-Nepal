'use client';
import React from 'react';
import { Autoplay, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import caseData from '@/data/home_2/cases';

function Case() {
  const swiperOptions = {
    modules: [Pagination, Keyboard, Autoplay],
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 1500,
    pagination: {
      el: '.tc-case-st2 .swiper-pagination',
      clickable: true,
    },
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
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className="tc-case-st2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-60 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> latest case study </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="cases-slider">
          <Swiper {...swiperOptions}>
            {caseData.map((caseItem) => (
              <SwiperSlide key={caseItem.id}>
                <div className="case-card">
                  <a href={caseItem.link} className="img">
                    <img
                      src={caseItem.imgSrc}
                      alt={caseItem.title}
                      className="img-cover"
                    />
                    <span className="float-arrow">
                      <i className="fal fa-arrow-down-right"></i>
                    </span>
                  </a>
                  <div className="info">
                    <div className="tags fsz-16 mb-15">
                      <a href="#">{caseItem.tag}</a>
                    </div>
                    <h4>
                      <a href={caseItem.link} className="fsz-30 hover-orange1">
                        {caseItem.title}
                      </a>
                    </h4>
                  </div>
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

export default Case;
