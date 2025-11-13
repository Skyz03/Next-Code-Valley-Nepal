import React from 'react';

function Related() {
  return (
    <section className="tc-pg-related-st1">
      <div className="container">
        <div className="title">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> Related Projects </h2>
            </div>
            <div className="col-lg-5">
              <div className="text fsz-16 mt-4 mt-lg-0">
                Maecenas ornare iaculis ultricies. Maecenas eget tristique orci.
                Praesen imperdiet purus et sodales volutpat Proin ultrices
                massa.
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="case-card wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <a href="#" className="img">
                  <img
                    src="/inner_pages/assets/img/case_det/c4.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="float-arrow">
                    <i className="fal fa-arrow-down-right"></i>
                  </span>
                </a>
                <div className="info">
                  <div className="tags fsz-16 mb-15">
                    <a href="#"> Data Analysis </a>
                  </div>
                  <h4>
                    <a href="#" className="fsz-30 hover-orange1">
                      article data analysis
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="case-card wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                <a href="#" className="img">
                  <img
                    src="/inner_pages/assets/img/case_det/c5.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="float-arrow">
                    <i className="fal fa-arrow-down-right"></i>
                  </span>
                </a>
                <div className="info">
                  <div className="tags fsz-16 mb-15">
                    <a href="#"> SEO Marketing </a>
                  </div>
                  <h4>
                    <a href="#" className="fsz-30 hover-orange1">
                      Offline SEO marketing
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="case-card wow fadeInUp slow"
                data-wow-delay="0.6s"
              >
                <a href="#" className="img">
                  <img
                    src="/inner_pages/assets/img/case_det/c6.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="float-arrow">
                    <i className="fal fa-arrow-down-right"></i>
                  </span>
                </a>
                <div className="info">
                  <div className="tags fsz-16 mb-15">
                    <a href="#"> Email Marketing </a>
                  </div>
                  <h4>
                    <a href="#" className="fsz-30 hover-orange1">
                      text email Marketing
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Related;
