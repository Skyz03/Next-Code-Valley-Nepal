import React from 'react';

function SubInfo() {
  return (
    <section className="tc-pg-subInfo-st1">
      <div className="container">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-tab1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab1"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab2-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab2"
            >
              Reviews (2)
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-tab1">
            <div className="tab-disc">
              <div className="text fsz-16 col-lg-11">
                {' '}
                Fusce porttitor, massa ut congue tincidunt, purus metus rutrum
                nunc, sit amet bibendum sem quam id velit. Donec id tristique
                dui. Integer cursus augue eu ornare finibus. Maecenas ac felis
                orci. Donec nisi enim, volutpat non ante sed, fringilla gravida
                ligula. Maecenas ac nulla sed diam faucibus placerat.
                Suspendisse in augue iaculis, vehicula nulla at, molestie diam.{' '}
              </div>
              <ul className="check-list">
                <li>
                  {' '}
                  <span className="icon">
                    {' '}
                    <i className="fal fa-check"></i>{' '}
                  </span>{' '}
                  <span className="txt">
                    {' '}
                    One-time security check fee: $99.95{' '}
                  </span>{' '}
                </li>
                <li>
                  {' '}
                  <span className="icon">
                    {' '}
                    <i className="fal fa-check"></i>{' '}
                  </span>{' '}
                  <span className="txt">
                    {' '}
                    Elite membership fee: $999.95 per month{' '}
                  </span>{' '}
                </li>
                <li>
                  {' '}
                  <span className="icon">
                    {' '}
                    <i className="fal fa-check"></i>{' '}
                  </span>{' '}
                  <span className="txt">
                    {' '}
                    Coast to domestic flights: from $3,799.95{' '}
                  </span>{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-tab2">
            <div className="product-reviews">
              <div className="row gx-5">
                <div className="col-lg-7">
                  <div className="reviews-content pt-30">
                    <h5 className="color-000 mb-40 text-capitalize">
                      {' '}
                      02 reviews{' '}
                    </h5>
                    <div className="comment-replay-cont py-5 px-4 mb-20 bg-white radius-5">
                      <div className="d-flex comment-cont">
                        <div className="icon-60 rounded-circle overflow-hidden me-3 flex-shrink-0">
                          <img
                            src="/inner_pages/assets/img/team/1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <div className="title d-flex justify-content-between">
                            <h6 className="fw-bold">Robert Downey Jr</h6>
                            <div className="time  text-uppercase d-inline-block">
                              <div className="rate">
                                <div className="stars">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text color-000  mt-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Atume nusaate staman utra phone
                            limo sumeria
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-replay-cont py-5 px-4 mb-20 bg-white radius-5">
                      <div className="d-flex comment-cont">
                        <div className="icon-60 rounded-circle overflow-hidden me-3 flex-shrink-0">
                          <img
                            src="/inner_pages/assets/img/team/2.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <div className="title d-flex justify-content-between">
                            <h6 className="fw-bold">Ben Chiwell</h6>
                            <div className="time  text-uppercase">
                              <div className="rate">
                                <div className="stars">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text color-000  mt-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Atume nusaate staman utra phone
                            limo sumeria
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form className="comment-form d-block pt-30">
                    <h5 className="color-000 mb-40 text-capitalize">
                      {' '}
                      Add a review{' '}
                    </h5>
                    <div className="row">
                      <div className="col-lg-12">
                        <label className="text-uppercase mb-1">
                          your rating
                        </label>
                        <div className="rate-stars">
                          <input type="radio" name="star" readOnly value="5" />
                          <input type="radio" name="star" readOnly value="4" />
                          <input type="radio" name="star" readOnly value="3" />
                          <input type="radio" name="star" readOnly value="2" />
                          <input type="radio" name="star" readOnly value="1" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-30">
                          <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Write your comment here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-4 mb-lg-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Email *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check mt-20">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label "
                            htmlFor="flexCheckDefault"
                          >
                            Save my name & email in this browser for next time I
                            comment
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <a
                          href="#"
                          className="butn bg-ln-orange1 rounded-pill text-white fsz-16 w-100 mt-20"
                        >
                          {' '}
                          <span>
                            {' '}
                            <i className="fal fa-paper-plane me-2"></i> send{' '}
                          </span>{' '}
                        </a>{' '}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubInfo;
