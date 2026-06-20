import React from 'react';
import './OurProgram.css';
import sponsor1 from './images/677759818_122166442004741314_2281252074818521350_n.jpg';
import sponsor2 from './images/677760519_122166442406741314_8779367622109839250_n.jpg';
import sponsor3 from './images/678141749_122166441962741314_6470186093959825626_n.jpg';
import sponsor4 from './images/678884251_122166442454741314_4765911283963846251_n.jpg';
import sponsor5 from './images/679058462_122166442046741314_392628753157281759_n.jpg';
import sponsor6 from './images/679364206_122166544910741314_9052442370030644720_n.jpg';
import sponsor7 from './images/679438162_122166441920741314_4081467914049851325_n.jpg';
import sponsor8 from './images/679924436_122166442280741314_1258374701860698075_n.jpg';

export default function OurProgram() {
  const sponsors = [
    { id: 1, image: sponsor1, name: 'Sponsor 1' },
    { id: 2, image: sponsor2, name: 'Sponsor 2' },
    { id: 3, image: sponsor3, name: 'Sponsor 3' },
    { id: 4, image: sponsor4, name: 'Sponsor 4' },
    { id: 5, image: sponsor5, name: 'Sponsor 5' },
    { id: 6, image: sponsor6, name: 'Sponsor 6' },
    { id: 7, image: sponsor7, name: 'Sponsor 7' },
    { id: 8, image: sponsor8, name: 'Sponsor 8' },
  ];

  return (
    <section className="our-program" id="our-program">
      <div className="our-program__inner">
        <header className="our-program__header" data-aos="fade-up">
          <h2 className="our-program__heading">Sponsors</h2>
          <p className="our-program__body">Meet our sponsors.</p>
        </header>

        <div className="our-program__grid" data-aos="fade-up" data-aos-delay="80">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="our-program__card">
              <img src={sponsor.image} alt={sponsor.name} className="our-program__card-image" />
              <div className="our-program__card-overlay">
                <h3 className="our-program__card-name">{sponsor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
