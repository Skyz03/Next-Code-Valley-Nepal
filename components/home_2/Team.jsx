'use client';
import React from 'react';
import teamData from '@/data/home_2/team.json';

const TeamMember = ({ name, role, image, social }) => (
  <div className="col-lg-3">
    <div className="team-card wow zoomIn slow" data-wow-delay="0.2s">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h5>
          <a href="#" className="fsz-24 mb-2 hover-orange1">
            {name}
          </a>
        </h5>
        <p className="fsz-16">{role}</p>
        <div className="social-icons">
          {social.map((icon, index) => (
            <a key={index} href={icon.url}>
              {icon.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function Team() {
  return (
    <section className="tc-team-st2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title text-center mb-60 js-splittext-lines">
              <h6 className="fsz-18 fw-300 mb-15">
                <span className="icon cr-orange1">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </h6>
              <h2 className="fsz-50"> Special Team Member </h2>
              <p className="fsz-16 mt-15">
                Integer vehicula diam et sollicitudin scelerisque. Vestibulum
                pellentesque bibendum magna, et bibendum turpis lacinia id.
                Praesent egestas tincidunt risus.
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="numbers">
          <div className="row justify-content-between gx-lg-5">
            <div className="col-lg-2">
              <div className="num-card wow zoomIn slow" data-wow-delay="0.2s">
                <h2 className="num fsz-50"> 12k </h2>
                <p className="fsz-16 px-4"> Projects Completed </p>
                <img
                  src="/home_2/assets/img/icons/num1.svg"
                  alt=""
                  className="shap"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="num-card wow zoomIn slow" data-wow-delay="0.4s">
                <h2 className="num fsz-50"> 98% </h2>
                <p className="fsz-16 px-4"> Happy Clients </p>
                <img
                  src="/home_2/assets/img/icons/num2.svg"
                  alt=""
                  className="shap"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="num-card wow zoomIn slow" data-wow-delay="0.6s">
                <h2 className="num fsz-50"> 28+ </h2>
                <p className="fsz-16 px-4"> Field Experience </p>
                <img
                  src="/home_2/assets/img/icons/num3.svg"
                  alt=""
                  className="shap"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="num-card wow zoomIn slow" data-wow-delay="0.8s">
                <h2 className="num fsz-50"> 8K </h2>
                <p className="fsz-16 px-4"> Customer Reviews </p>
                <img
                  src="/home_2/assets/img/icons/num4.svg"
                  alt=""
                  className="shap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home_2/assets/img/numb_line.png" alt="" className="line" />
      <img src="/home_2/assets/img/team_bg.png" alt="" className="bg" />
    </section>
  );
}

export default Team;
