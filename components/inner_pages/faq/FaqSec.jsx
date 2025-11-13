'use client';
import React from 'react';
import faqData from '@/data/inner_pages/faq';

function FaqSec() {
  return (
    <section className="tc-faq-st3">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img wow zoomIn slow" data-wow-delay="0.2s">
                <img src="/inner_pages/assets/img/faq_img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title mb-50 js-splittext-lines">
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
              <div
                className="accordion mt-5 mt-lg-0 js-splittext-lines"
                id="accordionFaq"
              >
                {faqData.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          faq.collapsed ? 'collapsed' : ''
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${
                        faq.collapsed ? '' : 'show'
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
    </section>
  );
}

export default FaqSec;
