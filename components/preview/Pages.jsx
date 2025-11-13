import React from 'react';
import data from '@/data/pages.json';

function Pages() {
  return (
    <section className="tc-demos-preview inner-demos pt-120">
      <div className="container">
        <div className="seaction-head-preview text-center mb-70">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h6> inner pages </h6>
              <h2> CheckCheck our inner pages </h2>
            </div>
          </div>
        </div>
        <div className="demos pt-0">
          <div className="row gx-lg-5">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4">
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
    </section>
  );
}

export default Pages;
