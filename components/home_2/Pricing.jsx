'use client';
import React from 'react';
import pricingData from '@/data/home_2/pricing.json';

const PriceCard = ({ title, price, description, buttonClass, buttonText }) => (
  <div className="price-card wow fadeInUp slow" data-wow-delay="0.2s">
    <div className="card-head">
      <h4 className="fsz-30 mb-2">{title}</h4>
      <p>{description}</p>
    </div>
    <div className="card-body">
      <h6 className="price">
        {price}/ <small> monthly </small>
      </h6>
      <ul className="card-list">
        <li>
          <i className="fal fa-check"></i>
          <span className="txt">
            <strong> 12 Hours </strong> Access
          </span>
        </li>
        <li>
          <i className="fal fa-check"></i>
          <span className="txt">
            Meeting <strong> Room $2/Per </strong> hour
          </span>
        </li>
        <li>
          <i className="fal fa-check"></i>
          <span className="txt"> Marketing Consultations </span>
        </li>
        <li>
          <i className="fal fa-check"></i>
          <span className="txt"> Financial Access ... </span>
        </li>
        <li>
          <i className="fal fa-check"></i>
          <span className="txt"> Customizable registration </span>
        </li>
      </ul>
    </div>
    <a
      href="#"
      className={`butn ${buttonClass} rounded-pill text-white fsz-16 mt-30 mb-20`}
    >
      <span>
        <i className="fal fa-arrow-right me-2"></i> {buttonText}
      </span>
    </a>
  </div>
);

function Pricing() {
  return (
    <section className="tc-pricing-st1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-60 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> Unique Price table </h2>
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
            {pricingData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <PriceCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
