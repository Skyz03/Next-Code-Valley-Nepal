import React from 'react';

function About() {
  return (
    <section className="tc-about-st2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div
              className="img mb-5 mb-lg-0 wow zoomIn slow"
              data-wow-delay="0.2s"
            >
              <img
                src="/home_2/assets/img/about.png"
                alt=""
                className="main-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <h6 className="fsz-18 fw-300 mb-20 js-splittext-lines">
                <span className="icon me-2 cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                Digital Marketing About Company
              </h6>
              <h2 className="fsz-50 js-splittext-lines">
                increase sell improving digital marketing.
              </h2>
              <p
                className="fsz-16 mt-30 pe-lg-5 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mi sem, tristique vel blandit sed, varius id tellus.
                Pellentesque pretium bibendum velit, at interdum libero cursus
                sit amet. Fusce ac faucibus elit. Maecenas at tortor odio. Proin
                eu imperdiet risus, non tempor lorem. Integer et dui finibus.
              </p>
              <ul
                className="check-list mt-30 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <li>
                  <img
                    src="/home_2/assets/img/icons/success1.png"
                    alt=""
                    className="icon"
                  />
                  <span className="txt"> 100% Campaign transparency </span>
                </li>
                <li>
                  <img
                    src="/home_2/assets/img/icons/success2.png"
                    alt=""
                    className="icon"
                  />
                  <span className="txt">
                    Friendly team of experts our company
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_2/assets/img/about_bg.png" alt="" className="bg" />
    </section>
  );
}

export default About;
