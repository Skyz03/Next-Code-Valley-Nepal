'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap/ScrollSmootsher';
import React, { useEffect } from 'react';

function Layout({ children }) {
  // useEffect(() => {
  //   document.body.classList.add('home-preview');

  //   // Smooth Scroll of Page
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  //   ScrollTrigger.normalizeScroll(true);
  //   ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //   });

  //   // Footer Animation
  //   // if (window.innerWidth > 991) {
  //   //   gsap.set('.footer-container', { yPercent: -50 });
  //   //   const uncover = gsap.timeline({ paused: true });
  //   //   uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
  //   //   ScrollTrigger.create({
  //   //     trigger: 'main',
  //   //     start: 'bottom bottom',
  //   //     end: '+=50%',
  //   //     animation: uncover,
  //   //     scrub: true,
  //   //   });
  //   // }

  //   // window.addEventListener('resize', handleResize);

  //   return () => {
  //     // window.removeEventListener('resize', handleResize);
  //     document.body.classList.remove('home-preview');
  //   };
  // }, []);
  return <>{children}</>;
}

export default Layout;
