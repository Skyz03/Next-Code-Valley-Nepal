import React from 'react';

function Header({ title }) {
  return (
    <header className="tc-inner-header-st1">
      <div style={{ zIndex: 7 }} className="container">
        <div className="links">
          <a href="#"> Home </a>
          <a href="#"> {title} </a>
        </div>
        <h1> {title} </h1>
      </div>
      <img
        src="/inner_pages/assets/img/line_circle.png"
        alt=""
        className="shap1"
        data-speed="1"
        data-lag="0.5"
      />
      <img
        src="/inner_pages/assets/img/hero_back_line.png"
        alt=""
        className="shap2"
        data-speed="1"
        data-lag="0.8"
      />
    </header>
  );
}

export default Header;
