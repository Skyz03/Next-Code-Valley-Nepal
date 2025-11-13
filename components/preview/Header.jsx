'use client';
import React from 'react';
import data from '@/data/head-sliders';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
function Header() {
  const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    speed: 15000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 1,
    },
    loop: true,
  };
  const swiperOptions2 = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    speed: 15000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,

    loop: true,
  };
  return (
    <header className="tc-header-preview">
      <div style={{ zIndex: 'auto' }} className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
              <span className="cr-orange1 mb-30"> V 1.0 </span>
              <h1>
                {' '}
                Digital Marketing & SEO <span> Nextjs theme </span>{' '}
              </h1>
              <a
                href="#"
                className="butn bg-ln-orange1 rounded-pill text-white fsz-16 mt-40"
              >
                {' '}
                <span>
                  {' '}
                  <i className="fal fa-arrow-down me-2"></i> Try Our Demos{' '}
                </span>{' '}
              </a>
              {/* <div className="icons">
                <span className="txt"> Built With: </span>
                <span className="icon">
                  {' '}
                  <img
                    src="/landing_page/assets/img/icons/elementor.png"
                    alt=""
                  />{' '}
                </span>
                <span className="icon">
                  {' '}
                  <img
                    src="/landing_page/assets/img/icons/wordpress.png"
                    alt=""
                  />{' '}
                </span>
                <span className="icon">
                  {' '}
                  <img
                    src="/landing_page/assets/img/icons/wp.png"
                    alt=""
                  />{' '}
                </span>
                <span className="icon">
                  {' '}
                  <img
                    src="/landing_page/assets/img/icons/rocket.png"
                    alt=""
                  />{' '}
                </span>
                <span className="icon">
                  {' '}
                  <img
                    src="/landing_page/assets/img/icons/bars.png"
                    alt=""
                  />{' '}
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="features-sliders mt-50">
        <div className="feat-slider">
          <Swiper {...swiperOptions}>
            {data.slider1.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="feat-card">
                  <div className="inf">
                    <h6 className="fsz-18 fw-bold mb-3"> {item.title} </h6>
                    <p className="fsz-14 cr-666">{item.desc}</p>
                  </div>
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="feat-slider feat-slider2">
          <Swiper
            autoplay={{ delay: 1, reverseDirection: true }}
            {...swiperOptions2}
          >
            {data.slider2.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="feat-card">
                  <div className="inf">
                    <h6 className="fsz-18 fw-bold mb-3">{item.title}</h6>
                    <p className="fsz-14 cr-666">{item.desc}</p>
                  </div>
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        src="/landing_page/assets/img/s_logo.svg"
        alt=""
        className="s-logo"
        style={{ zIndex: -2 }}
      />
      <img
        style={{ zIndex: -2 }}
        src="/landing_page/assets/img/head_back.png"
        alt=""
        className="bg"
      />
    </header>
  );
}

export default Header;
