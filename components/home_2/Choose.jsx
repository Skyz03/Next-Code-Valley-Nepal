import React from "react";
import data from "@/data/home_2/choose";
import nums from "@/data/home_2/nums";
function Choose() {
  return (
    <section className='tc-choose-st1'>
      <div className='container'>
        <div className='row gx-lg-0'>
          <div className='col-lg-4'>
            <div className='info pe-lg-5 me-lg-4'>
              <h6 className='fsz-18 fw-300 mb-30 js-splittext-lines'>
                <span className='icon me-2 cr-orange1'>
                  <i className='fal fa-long-arrow-right'></i>
                </span>
                Why Choose Us
              </h6>
              <h2 className='fsz-50 js-splittext-lines'>
                What we offer Explore now
              </h2>
              <div
                className='text fsz-16 mt-15 wow fadeInUp slow'
                data-wow-delay='0.2s'
              >
                Mauris ut sem at risus pretium congue in non risus. Donec
                fringilla viverra porta. Mauris metus purus, efficitur nec lacus
                sed.
              </div>
              <a
                href='/inner_pages/services'
                className='butn bg-ln-blue1 rounded-pill text-white fsz-16 mt-40 wow fadeInUp slow'
                data-wow-delay='0.2s'
              >
                <span>
                  <i className='fal fa-arrow-right me-2'></i> More Service
                </span>
              </a>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='cards mt-5 mt-lg-0'>
              <div className='row gx-lg-5'>
                {data.map((item, i) => (
                  <div key={i} className='col-lg-6'>
                    <a
                      href='#'
                      className='choose-card wow fadeInUp slow'
                      data-wow-delay='0.2s'
                    >
                      <div className='icon'>
                        <img src={item.img} alt='' />
                      </div>
                      <div className='info'>
                        <h5 className='fsz-24 mb-15'>{item.title}</h5>
                        <div className='text fsz-16'>{item.desc}</div>
                        <span className='arrow'>
                          <i className='fal fa-chevron-right'></i>
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='numbers'>
          <div className='row justify-content-between gx-lg-5'>
            {nums.map((item, i) => (
              <div key={i} className='col-lg-2'>
                <div className='num-card wow zoomIn slow' data-wow-delay='0.2s'>
                  <h2 className='num fsz-50'> {item.num} </h2>
                  <p className='fsz-16 px-4'> {item.title} </p>
                  <img src={item.img} alt='' className='shap' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src='/home_1/assets/img/numb_line.png'
        alt=''
        className='num-line wow'
      />
    </section>
  );
}

export default Choose;
