import React from 'react';
import servicesData from '@/data/home_2/services.json';

function Services() {
  return (
    <section className="tc-services-st2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-50 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> Best of our service </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-4">
              <div
                className="service-card wow fadeInUp slow"
                data-wow-delay={service.delay}
              >
                <div className="icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <p>{service.title}</p>
                <h6 className="title">{service.description}</h6>
                <a href={service.link} className="fsz-16 hover-orange1">
                  <i className="fal fa-long-arrow-right me-2"></i>
                  <span className="txt">Read More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
