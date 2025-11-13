"use client";
import React from "react";
import demos from "@/data/demos";
import pages from "@/data/pages";
import gsap from "gsap";

function Navbar({ st, logo }) {
  const tl400 = gsap.timeline();

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".demos-dropdown")?.classList.add("show");
  }

  async function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".demos-dropdown")
      .classList.remove("show");
    tl400.to(".demos-dropdown .demo-card", {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });
    tl400.reverse();
  }
  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }
  function handleAnimationEnter() {
    tl400.to(".demos-dropdown .demo-card", {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });

    tl400.restart();
  }
  function openSideMenu() {
    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");
    sideMenu2.classList.add("show");
    sideMenu.classList.add("show");
    sideMenu4.classList.add("show");
  }
  return (
    <nav style={{ zIndex: 10 }} className={`navbar navbar-expand-lg ${st}  `}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={`/${logo}/assets/img/logo.svg`} alt='' className='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-lg-auto'>
            <li
              onMouseEnter={handleAnimationEnter}
              onMouseMove={handleDropdownMouseMove}
              onMouseLeave={handleDropdownMouseLeave}
              className='nav-item'
            >
              <a className='nav-link demos-dropdown-toggle' href='#'>
                Home Pages
              </a>
              <div className='demos-dropdown home-pages'>
                <div className='row gx-lg-5'>
                  {demos.map((item, i) => (
                    <div key={i} className='col-lg-3 col-6'>
                      <a href={item.link} className='demo-card' target='_blank'>
                        <div className='img'>
                          <img src={item.img} alt='' />
                        </div>
                        <h6 className='title fsz-14 fw-bold mt-20'>
                          {item.name}
                        </h6>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li
              onMouseEnter={handleAnimationEnter}
              onMouseMove={handleDropdownMouseMove}
              onMouseLeave={handleDropdownMouseLeave}
              className='nav-item'
            >
              <a className='nav-link demos-dropdown-toggle' href='#'>
                Inner Pages
              </a>
              <div className='demos-dropdown'>
                <div className='row'>
                  {pages.map((item, i) => (
                    <div key={i} className='col-lg-2 col-6 '>
                      <a href={item.link} className='demo-card' target='_blank'>
                        <div className='img'>
                          <img src={item.img} alt='' />
                        </div>
                        <h6 className='title fsz-14 fw-bold mt-20'>
                          {item.name}
                        </h6>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className='side-nav'>
            <a href='/inner_pages/contact' className='chat-btn'>
              <span className='txt'> Lat’s Chat </span>
              <span className='arrow'>
                <i className='fal fa-long-arrow-right'></i>
              </span>
            </a>
            <a href='#' className='bars-btn side_menu_btn fsz-20 ms-100'>
              <span onClick={openSideMenu} className='icon'>
                <i className='far fa-bars-sort'></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
