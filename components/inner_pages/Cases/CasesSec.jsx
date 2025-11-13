'use client';
import React from 'react';
import casesData from '@/data/inner_pages/cases';

function CasesSec() {
  return (
    <section className="tc-pg-cases-st5">
      <div className="container">
        <div className="cards">
          <div className="row align-items-end">
            {casesData.map((caseItem) => (
              <div key={caseItem.id} className="col-lg-4">
                <div
                  className={`case-card wow fadeInUp slow`}
                  data-wow-delay={caseItem.delay}
                >
                  <a href="#" className="img">
                    <img src={caseItem.img} alt="" className="img-cover" />
                    <span className="float-arrow">
                      <i className="fal fa-arrow-down-right"></i>
                    </span>
                  </a>
                  <div className="info">
                    <div className="tags fsz-16 mb-15">
                      <a href="#"> {caseItem.category} </a>
                    </div>
                    <h4>
                      <a href="#" className="fsz-30 hover-orange1">
                        {caseItem.title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="join">
          <span className="lg-txt"> More Projects </span>
          <a href="#" className="butn-cir">
            <span className="arrow">
              <i className="fal fa-long-arrow-down"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CasesSec;
