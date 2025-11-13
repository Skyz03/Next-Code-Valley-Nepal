import React from "react";

function Footer() {
  return (
    <footer className='tc-footer-st1'>
      <div className='container'>
        <div className='links-content'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='contact-info'>
                <div className='item mb-5'>
                  <h6 className='fsz-20 mb-10 fw-400'> Address </h6>
                  <p className='fsz-16'>
                    {" "}
                    United States 866 Wilshire, 2nd Street Los Angeles 90024.{" "}
                  </p>
                </div>
                <div className='item mb-5'>
                  <h6 className='fsz-20 mb-10'> +55 (9900) 666 22 </h6>
                  <p className='fsz-16'> Contact Phone </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 offset-lg-3'>
              <div className='links-group mb-5'>
                <h6 className='fsz-20 fw-400 mb-20'> Our Menu </h6>
                <ul className='links'>
                  <li>
                    {" "}
                    <a href='#'> About Us </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> Contact Us </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> Terms of service </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> Privacy Policy </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='links-group mb-5'>
                <h6 className='fsz-20 fw-400 mb-20'> Top Links </h6>
                <ul className='links'>
                  <li>
                    {" "}
                    <a href='#'> We’re Hiring </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> Cookie Policy </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> News & Media </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href='#'> News & Media </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='subscribe'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='subscribe-content'>
                <div className='row align-items-center gx-lg-0'>
                  <div className='col-lg-4'>
                    <h5 className='fsz-30 fw-400'>
                      {" "}
                      Subscribe Now Our Newsletter{" "}
                    </h5>
                  </div>
                  <div className='col-lg-1 d-none d-lg-block'>
                    <img
                      src='/home_2/assets/img/subs_circle.png'
                      alt=''
                      className='circle'
                    />
                  </div>
                  <div className='col-lg-7'>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Enter your email address...'
                      />
                      <button className='arrow'>
                        {" "}
                        <i className='fal fa-arrow-right'></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy fsz-16 cr-666 text-center py-5'>
          {" "}
          Copyright: © 2024 nucaz by{" "}
          <a href='#' className='fw-bold'>
            {" "}
            UiCamp{" "}
          </a>{" "}
          All Rights Reserved.{" "}
        </div>
      </div>
      <img src='/home_2/assets/img/footer_bg.png' alt='' className='bg' />
    </footer>
  );
}

export default Footer;
