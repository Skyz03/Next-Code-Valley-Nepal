import React from 'react';

function Layouts() {
  return (
    <section className="tc-layouts-preview">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info ps-lg-5">
              <h2 className="fsz-50 mb-40"> Unique Portfolio Layouts </h2>
              <div className="text fsz-16 cr-666">
                {' '}
                With pre-defined layouts, you can create a portfolio of
                articles, images, or videos and show them in an organized and
                visually appealing way.{' '}
              </div>
              <div className="icons">
                <div className="row">
                  <div className="col-lg-4 col-6">
                    <div className="icon-card">
                      <div className="img">
                        <img
                          src="/landing_page/assets/img/icons/lay1.png"
                          alt=""
                        />
                      </div>
                      <h6 className="fsz-11"> Project Slider </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="icon-card">
                      <div className="img">
                        <img
                          src="/landing_page/assets/img/icons/lay2.png"
                          alt=""
                        />
                      </div>
                      <h6 className="fsz-11"> Masonry </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="icon-card">
                      <div className="img">
                        <img
                          src="/landing_page/assets/img/icons/lay3.png"
                          alt=""
                        />
                      </div>
                      <h6 className="fsz-11"> Carousel </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="icon-card">
                      <div className="img">
                        <img
                          src="/landing_page/assets/img/icons/lay4.png"
                          alt=""
                        />
                      </div>
                      <h6 className="fsz-11"> Clasisic Grid </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="icon-card">
                      <div className="img">
                        <img
                          src="/landing_page/assets/img/icons/lay5.png"
                          alt=""
                        />
                      </div>
                      <h6 className="fsz-11"> Parallax </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-img mt-5 mt-lg-0">
              <img
                src="/landing_page/assets/img/layouts.jpg"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/landing_page/assets/img/lay_circle.png"
        alt=""
        className="lay-circle1"
      />
      <img
        src="/landing_page/assets/img/lay_circle.png"
        alt=""
        className="lay-circle2"
      />
    </section>
  );
}

export default Layouts;
