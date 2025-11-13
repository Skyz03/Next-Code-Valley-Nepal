'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import demos from '@/data/demos';
import pages from '@/data/pages';
function Navbar() {
  const tl400 = gsap.timeline();

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.demos-dropdown')?.classList.add('show');
  }

  async function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.demos-dropdown')
      .classList.remove('show');
    tl400.to('.demos-dropdown .demo-card', {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 0.5,
        from: 'start',
      },
    });
    tl400.reverse();
  }
  function toggleNavbar() {
    document.querySelector('.navbar .navbar-collapse').classList.toggle('show');
  }
  function handleAnimationEnter() {
    tl400.to('.demos-dropdown .demo-card', {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 0.5,
        from: 'start',
      },
    });

    tl400.restart();
  }
  return (
    <div className="nav-wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg tc-navbar-preview">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/landing_page/assets/img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-lg-auto">
                <li
                  onMouseEnter={handleAnimationEnter}
                  onMouseMove={handleDropdownMouseMove}
                  onMouseLeave={handleDropdownMouseLeave}
                  className="nav-item"
                >
                  <a className="nav-link demos-dropdown-toggle" href="#">
                    Home Pages
                  </a>
                  <div className="demos-dropdown home-pages">
                    <div className="row gx-lg-5">
                      {demos.map((item, i) => (
                        <div key={i} className="col-lg-3 col-6">
                          <a
                            href={item.link}
                            className="demo-card"
                            target="_blank"
                          >
                            <div className="img">
                              <img src={item.img} alt="" />
                            </div>
                            <h6 className="title fsz-14 fw-bold mt-20">
                              {item.name}
                            </h6>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li
                  style={{ zIndex: 100 }}
                  onMouseEnter={handleAnimationEnter}
                  onMouseMove={handleDropdownMouseMove}
                  onMouseLeave={handleDropdownMouseLeave}
                  className="nav-item"
                >
                  <a className="nav-link demos-dropdown-toggle" href="#">
                    Inner Pages
                  </a>
                  <div className="demos-dropdown">
                    <div className="row">
                      {pages.map((item, i) => (
                        <div key={i} className="col-lg-2 col-6 ">
                          <a
                            href={item.link}
                            className="demo-card"
                            target="_blank"
                          >
                            <div className="img">
                              <img src={item.img} alt="" />
                            </div>
                            <h6 className="title fsz-14 fw-bold mt-20">
                              {item.name}
                            </h6>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
              <div className="nav-side">
                <a
                  href="#"
                  className="butn bg-ln-orange1 rounded-pill text-white fsz-16 ms-4"
                >
                  <span>
                    <i className="fal fa-comment me-2"></i> Let’s Talk{' '}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
