import React from 'react';
import partnersData from '@/data/home_2/partners';

function Partners() {
  return (
    <section className="tc-partners-st2">
      <div className="container">
        <div className="logos">
          {partnersData.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              className="img wow fadeInUp slow"
              data-wow-delay={partner.delay}
            >
              <img src={partner.image} alt={`Partner ${partner.id}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
