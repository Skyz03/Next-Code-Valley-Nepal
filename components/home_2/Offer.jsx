import React from 'react';
import offerData from '@/data/home_2/offer.json';

function Offer() {
  return (
    <section className="tc-offer-st2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-30 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> What we offer Explore </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            {offerData.map((offer) => (
              <div key={offer.id} className="col-lg-4">
                <a
                  href={offer.link}
                  className="offer-card wow fadeInUp slow"
                  data-wow-delay={offer.delay}
                >
                  <div className="icon">
                    <img src={offer.icon} alt={offer.title} />
                  </div>
                  <div className="info">
                    <h5 className="fsz-24 mb-15">{offer.title}</h5>
                    <div className="text fsz-16">{offer.description}</div>
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
      <img src="/home_2/assets/img/offer_line.png" alt="" className="line" />
      <img src="/home_2/assets/img/offer_bg.png" alt="" className="bg" />
    </section>
  );
}

export default Offer;
