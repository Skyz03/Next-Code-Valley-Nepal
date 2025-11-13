'use client';
import React, { useEffect, useState } from 'react';

function Cursor() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      const e = document.querySelector('.cursor-inner');
      const t = document.querySelector('.cursor-outer');
      let n,
        i = 0,
        o = false;

      body.addEventListener('mousemove', function (s) {
        if (!o) {
          t.style.transform =
            'translate(' + s.clientX + 'px, ' + s.clientY + 'px)';
          e.style.transform =
            'translate(' + s.clientX + 'px, ' + s.clientY + 'px)';
        }
        n = s.clientY;
        i = s.clientX;

        const hoverElements = document.querySelectorAll('a, .cursor-pointer');
        const isHovered = Array.from(hoverElements).some((element) =>
          element.contains(document.elementFromPoint(s.clientX, s.clientY))
        );

        if (isHovered !== hover) {
          setHover(isHovered);
        }
      });

      e.style.visibility = 'visible';
      t.style.visibility = 'visible';
    }
  }, [hover]);

  return (
    <>
      <div
        className={`mouse-cursor cursor-outer ${hover ? 'cursor-hover' : ''}`}
      ></div>
      <div
        className={`mouse-cursor cursor-inner ${hover ? 'cursor-hover' : ''}`}
      ></div>
    </>
  );
}

export default Cursor;
