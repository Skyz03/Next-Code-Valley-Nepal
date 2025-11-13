"use client";
import React from "react";

function Menu() {
  function closeSideMenu() {
    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");
    sideMenu2.classList.remove("show");
    sideMenu.classList.remove("show");
    sideMenu4.classList.remove("show");
  }
  return (
    <>
      <div className='side_menu4_overlay'></div>
      <div className='side_menu4_overlay2'></div>
      <div className='side_menu_style4'>
        <div className='content'>
          <div className='main_links'>
            <ul>
              <li>
                <a href='/home_2' className='main_link'>
                  home
                </a>
              </li>
              <li>
                <a href='/inner_pages/about' className='main_link'>
                  About us
                </a>
              </li>
              <li>
                <a href='/inner_pages/services' className='main_link'>
                  Services
                </a>
              </li>
              <li>
                <a href='/inner_pages/cases' className='main_link'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='/inner_pages/shop' className='main_link'>
                  Shop
                </a>
              </li>
              <li>
                <a href='/inner_pages/blog' className='main_link'>
                  Blog
                </a>
              </li>
              <li>
                <a href='/inner_pages/contact' className='main_link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span onClick={closeSideMenu} className='clss'>
          <i className='fal fa-times'></i>
        </span>
      </div>
    </>
  );
}

export default Menu;
