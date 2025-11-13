'use client';
import React from 'react';
import data from '@/data/demos.json';
function Demos() {
  return (
    <section className="tc-demos-preview pb-0">
      <div className="container">
        <div className="seaction-head-preview text-center mb-70">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h6> check demos </h6>
              <h2> Check our quality demos </h2>
            </div>
          </div>
        </div>
        <div className="demos">
          <div className="row gx-lg-5">
            {data.map((item, i) => (
              <div key={i} className="col-lg-6">
                <a href={item.link} className="demo-card" target="_blank">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <h6 className="title"> {item.name} </h6>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg-txt">
        <span className="txt"> 80+ </span>
      </div>
      <img src="/landing_page/assets/img/ab2_bg.png" alt="" className="bg" />
    </section>
  );
}

export default Demos;
