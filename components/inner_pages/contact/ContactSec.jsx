import React from 'react';

function ContactSec() {
  return (
    <section className="tc-pg-contact-st1">
      <div className="container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6160434.715548223!2d-109.74782450438904!3d41.068451344962604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0xa127900c0ff30ac4!2sNebraska%2C%20USA!5e0!3m2!1sen!2seg!4v1707255992066!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="pt-40">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info">
                <h5 className="fsz-35 mb-30">
                  Get Started and grow your business now.
                </h5>
                <ul className="icon-list">
                  <li>
                    <span className="icon">
                      <img
                        src="/inner_pages/assets/img/icons/success1-1.png"
                        alt=""
                      />
                    </span>
                    <span className="txt"> +55 (9900) 666 22 </span>
                  </li>
                  <li>
                    <span className="icon">
                      <img
                        src="/inner_pages/assets/img/icons/success1-1.png"
                        alt=""
                      />
                    </span>
                    <span className="txt"> info.mirpur@gmail.com </span>
                  </li>
                  <li>
                    <span className="icon">
                      <img
                        src="/inner_pages/assets/img/icons/success1-1.png"
                        alt=""
                      />
                    </span>
                    <span className="txt">Mirpur 12, Block C, Dhaka, BD.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="form">
                <h5 className="fsz-35 mb-30"> Leave a Comment </h5>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="" className="fsz-16 fw-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="" className="fsz-16 fw-500">
                        Your Mail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="infoflex@info.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="" className="fsz-16 fw-500">
                        Message
                      </label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <p className="fsz-16 cr-666">
                  * Call us 24/7 or fill out the form below to receive a free.
                </p>
                <a
                  href="#"
                  className="butn bg-ln-orange1 rounded-pill text-white fsz-16 mt-50"
                >
                  <span>
                    <i className="fal fa-arrow-right me-2"></i> Send A Message
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="join">
          <span className="lg-txt"> Let’s Get a project </span>
          <a href="#" className="butn-cir">
            <span className="arrow">
              <i className="fal fa-long-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSec;
