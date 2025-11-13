'use client';
import React from 'react';
import chooseCardsData from '@/data/inner_pages/chooseCards';
import chooseStatsData from '@/data/inner_pages/chooseStates';

function Choose() {
  return (
    <section className="tc-pg-choose-st1">
      <div className="container">
        <div className="row gx-lg-0">
          <div className="col-lg-4">
            <div className="info pe-lg-5 me-lg-4">
              <h6 className="fsz-18 fw-300 mb-30 js-splittext-lines">
                <span className="icon me-2 cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                Why Choose Us
              </h6>
              <h2 className="fsz-50 js-splittext-lines">
                What we offer Explore now
              </h2>
              <div
                className="text fsz-16 mt-15 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Mauris ut sem at risus pretium congue in non risus. Donec
                fringilla viverra porta. Mauris metus purus, efficitur nec lacus
                sed.
              </div>
              <a
                href="#"
                className="butn bg-ln-blue1 rounded-pill text-white fsz-16 mt-40 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <span>
                  <i className="fal fa-arrow-right me-2"></i> More Service
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cards mt-5 mt-lg-0">
              <div className="row gx-lg-5">
                {chooseCardsData.map((card) => (
                  <div key={card.id} className="col-lg-6">
                    <a
                      href="#"
                      className="choose-card wow fadeInUp slow"
                      data-wow-delay={card.delay}
                    >
                      <div className="icon">
                        <img src={card.icon} alt="" />
                      </div>
                      <div className="info">
                        <h5 className="fsz-24 mb-15">{card.title}</h5>
                        <div className="text fsz-16">{card.text}</div>
                        <span className="arrow">
                          <i className="fal fa-chevron-right"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="numbers">
          <div className="row justify-content-between gx-lg-5">
            {chooseStatsData.map((stat) => (
              <div key={stat.id} className="col-lg-2">
                <div
                  className="num-card wow zoomIn slow"
                  data-wow-delay={stat.delay}
                >
                  <h2 className="num fsz-50"> {stat.number} </h2>
                  <p className="fsz-16 px-4"> {stat.description} </p>
                  <img src={stat.icon} alt="" className="shap" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
