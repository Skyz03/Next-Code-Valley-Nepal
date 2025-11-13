import React from 'react';
import faqData from '@/data/home_1/faq';

export default function Faq() {
  return (
    <section className="tc-faq-st1">
      <div className="container">
        <div className="section-head mb-60">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-5">
              <div className="title mb-4 mb-lg-0 js-splittext-lines">
                <h6 className="fsz-18 fw-300 mb-30">
                  <span className="icon me-2 cr-orange1">
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                  Frequency and question&lsquo;s
                </h6>
                <h2 className="fsz-50">
                  fAQ we provide I have far and skills.
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text cr-666 fsz-16 mb-10 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus, eget volutpat lectus porta et.
                Suspendisse ultricies porta justo in pretium.
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="img wow zoomIn slow" data-wow-delay="0.2s">
                <img src="/home_1/assets/img/faq_img.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="accordion mt-5 mt-lg-0 js-splittext-lines"
                id="accordionFaq"
              >
                {faqData.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index !== 1 ? 'collapsed' : ''
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${
                        index === 1 ? 'show' : ''
                      }`}
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        <div className="text fsz-16">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_1/assets/img/faq_bg.png" alt="" className="bg" />
      <img src="/home_1/assets/img/faq_line.svg" alt="" className="line wow" />
    </section>
  );
}
