import React from 'react';

function AboutSer() {
  return (
    <section className="tc-pg-about-st2-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="img mb-5 mb-lg-0">
              <img
                src="/inner_pages/assets/img/about2.png"
                alt=""
                className="main-img"
                data-speed="1"
                data-lag="0.9"
              />
              <img
                src="/inner_pages/assets/img/about3.png"
                alt=""
                className="sub-img rotate-center"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <h6 className="fsz-18 fw-300 mb-30 js-splittext-lines">
                {' '}
                <span className="icon me-2 cr-orange1">
                  {' '}
                  <i className="fal fa-long-arrow-right"></i>{' '}
                </span>{' '}
                Digital Marketing About Company{' '}
              </h6>
              <h2 className="fsz-50 js-splittext-lines">
                {' '}
                We Help you increase improving digital marketing.{' '}
              </h2>
              <h6
                className="fsz-16 fw-bold mt-30 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                {' '}
                your digital marketing & Strategy solution agency optimized your
                business.{' '}
              </h6>
              <p
                className="fsz-16 mt-30 pe-lg-5 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                {' '}
                Mauris ut sem at risus pretium congue in non risus. Donec
                fringilla viverra porta. Mauris metus purus, efficitur nec lacus
                sed, molestie placerat velit. Vivamus mi ante, laoreet vulputate
                faucibus vitae.{' '}
              </p>
              <a
                href="#"
                className="butn bg-ln-green1 rounded-pill text-white fsz-16 mt-40 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                {' '}
                <span>
                  {' '}
                  <i className="fal fa-arrow-right me-2"></i> About More{' '}
                </span>{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="clients-cards">
          <a href="#" className="wow fadeInUp slow" data-wow-delay="0.6s">
            {' '}
            <img src="/inner_pages/assets/img/clients/cl1.png" alt="" />{' '}
          </a>
          <a href="#" className="wow fadeInUp slow" data-wow-delay="0.4s">
            {' '}
            <img src="/inner_pages/assets/img/clients/cl2.png" alt="" />{' '}
          </a>
          <a href="#" className="wow fadeInUp slow" data-wow-delay="0.2s">
            {' '}
            <img src="/inner_pages/assets/img/clients/cl3.png" alt="" />{' '}
          </a>
          <a href="#" className="wow fadeInUp slow" data-wow-delay="0.4s">
            {' '}
            <img src="/inner_pages/assets/img/clients/cl4.png" alt="" />{' '}
          </a>
          <a href="#" className="wow fadeInUp slow" data-wow-delay="0.6s">
            {' '}
            <img src="/inner_pages/assets/img/clients/cl5.png" alt="" />{' '}
          </a>
        </div>
      </div>
      <img
        src="/inner_pages/assets/img/line_or.png"
        alt=""
        className="line wow"
      />
    </section>
  );
}

export default AboutSer;
