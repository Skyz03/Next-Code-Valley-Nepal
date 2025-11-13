'use client';
import React, { useEffect, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider() {
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryTextOptions = {
    modules: [FreeMode, Thumbs],
    onSwiper: setGalleryText,
    spaceBetween: 30,
    slidesPerView: 3,
    loop: false,
    freeMode: true,
    loopedSlides: 3,
  };

  const swiperGalleryImageOptions = {
    modules: [Thumbs],
    spaceBetween: 30,
    loop: false,
    loopedSlides: 3, //looped slides should be the same
    navigation: false,
    thumbs: {
      swiper: galleryText,
    },
  };

  return (
    <section className="tc-pg-slider-st1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="img-slider">
              <div className="swiper-container gallery-top">
                <Swiper
                  {...swiperGalleryImageOptions}
                  className="swiper-container"
                >
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn1.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn2.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn3.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-container gallery-thumbs">
                <Swiper
                  className="swiper-container"
                  {...swiperGalleryTextOptions}
                >
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn1.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn2.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img">
                      <img
                        src="/inner_pages/assets/img/shop/products/sn3.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="text fsz-16 mb-2"> Featured Products </div>
              <h2 className="tile fsz-30 fw-500 mb-3">
                {' '}
                Turtle Beach Recon Controller Wired Game Controller Officially{' '}
              </h2>
              <h5 className="fsz-24 fw-400">
                {' '}
                $29.96/{' '}
                <small className="fsz-16 op-5 text-decoration-line-through">
                  {' '}
                  $23.96{' '}
                </small>{' '}
              </h5>
              <div className="rate">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="txt"> (113 Reviews) </span>
              </div>
              <div className="text fsz-16 mt-30">
                {' '}
                Etiam accumsan eu quam bibendum aliquet. Praesent interdum,
                sapien vel tristique iaculis, erat augue faucibus dolor.{' '}
              </div>
              <div className="product-qyt">
                <span className="txt"> Choose Quantity: </span>
                <div className="add-more">
                  <span className="qt-minus">
                    <i className="fas fa-minus"></i>
                  </span>
                  <input
                    type="text"
                    className="qt border-0"
                    readOnly
                    value="1"
                  />
                  <span className="qt-plus">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
              <ul className="fsz-16 lh-6 mt-30">
                <li>
                  {' '}
                  <strong className="me-3"> Tag: </strong>{' '}
                  <span className="text">
                    {' '}
                    clothes, creative, ecommerce, fashion, fashion store{' '}
                  </span>{' '}
                </li>
              </ul>
              <div className="btns mt-50">
                <a
                  href="#"
                  className="butn rounded-pill border border-dark text-dark hover-bg-black fsz-16 me-3"
                >
                  {' '}
                  <span>
                    {' '}
                    <i className="fal fa-heart me-2"></i> Add to Wishlist{' '}
                  </span>{' '}
                </a>
                <a
                  href="#"
                  className="butn bg-ln-orange1 rounded-pill text-white fsz-16"
                >
                  {' '}
                  <span>
                    {' '}
                    <i className="fal fa-cart-plus me-2"></i> Add To Cart{' '}
                  </span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
