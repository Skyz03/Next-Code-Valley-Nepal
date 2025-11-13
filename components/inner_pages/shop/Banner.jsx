import React from 'react';

function Banner() {
  return (
    <section className="tc-pg-shop-banner-st1">
      <div className="container">
        <div className="banner-card">
          <div className="img">
            <img
              src="/inner_pages/assets/img/shop/banner.png"
              alt=""
              className="img-cover"
            />
          </div>
          <div className="info col-lg-8">
            <h6 className="fsz-30 fw-400 text-white">
              {' '}
              Minimum Purchase $100.{' '}
            </h6>
            <div className="title">
              <h2> Free Delivery on top deals. </h2>
              <img
                src="/inner_pages/assets/img/shop/title_bg.png"
                alt=""
                className="bg"
              />
            </div>
            <a
              href="#"
              className="butn bg-ln-orange1 rounded-pill text-white fsz-16 mt-30 mb-20"
            >
              {' '}
              <span>
                {' '}
                <i className="fal fa-arrow-right me-2"></i> Shop Now{' '}
              </span>{' '}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
