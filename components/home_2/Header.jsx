import React from 'react';

function Header() {
  return (
    <header className="tc-header-st2">
      <div style={{ zIndex: 7 }} className="container">
        <div className="row align-items-center gx-lg-0">
          <div className="col-lg-6">
            <div className="info">
              <p className="fsz-18 fw-400 mb-15">
                <span className="arrow me-1">
                  <i className="fal fa-arrow-right-long"></i>
                </span>
                <span className="txt">Digital Marketing Strategy & Agency</span>
              </p>
              <h1> For marketing professionals research. </h1>
              <div className="contact-card">
                <span className="icon fsz-35">
                  <i className="fal fa-envelope"></i>
                </span>
                <div className="cont">
                  <small> Contact Mail </small>
                  <h6>
                    <a href="#" className="lnk">
                      info.gvd @gmail.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/home_2/assets/img/head_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="#"> fb </a>
        <a href="#"> in </a>
        <a href="#"> tw </a>
        <a href="#"> be </a>
      </div>
      <img
        src="/home_2/assets/img/head_circle.png"
        alt=""
        className="or-circle"
      />
      <img
        src="/home_2/assets/img/head_circle1.png"
        alt=""
        className="circle rotate-center"
      />
      <img
        src="/home_2/assets/img/top_circle.png"
        alt=""
        className="float-circle rotate-center"
      />
    </header>
  );
}

export default Header;
