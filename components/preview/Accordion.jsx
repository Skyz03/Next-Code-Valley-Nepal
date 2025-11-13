import React from 'react';

function Accordion() {
  return (
    <section className="tc-accordion-preview">
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6">
            <div className="img-side">
              <div className="img">
                <div className="ab-img">
                  <img src="/landing_page/assets/img/acc.jpg" alt="" />
                </div>
              </div>
              <div className="rotate-box" data-speed="1" data-lag="0.5">
                <img
                  src="/landing_page/assets/img/fav_wh.svg"
                  alt=""
                  className="icon"
                />
                <div className="rotate-circle fsz-22 fw-600 rotate-text">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">
                        {' '}
                        solid solutions for your enykind of business - we
                        serving quality service -{' '}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion ps-lg-5" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                  >
                    Pre-Built Solutions
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="text cr-666 fsz-14">
                      {' '}
                      All content is fully customizable, and allows you to add,
                      remove and adjust any elements in the section.{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                  >
                    Drag & Drop
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="text cr-666 fsz-14">
                      {' '}
                      All content is fully customizable, and allows you to add,
                      remove and adjust any elements in the section.{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                  >
                    Smart Styles
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="text cr-666 fsz-14">
                      {' '}
                      All content is fully customizable, and allows you to add,
                      remove and adjust any elements in the section.{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                  >
                    Customize Anything
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="text cr-666 fsz-14">
                      {' '}
                      All content is fully customizable, and allows you to add,
                      remove and adjust any elements in the section.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/landing_page/assets/img/line_or.png" alt="" className="line" />
    </section>
  );
}

export default Accordion;
