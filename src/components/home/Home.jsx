import React from 'react';
import './Home.css';

/* Pixel Character */
function PixelCharacter() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      {/* Head */}
      <rect x="25" y="10" width="30" height="30" fill="#ff9e64"/>
      {/* Eyes */}
      <rect x="30" y="18" width="6" height="6" fill="#000"/>
      <rect x="44" y="18" width="6" height="6" fill="#000"/>
      {/* Body */}
      <rect x="22" y="40" width="36" height="28" fill="#3b82f6"/>
      {/* Arms */}
      <rect x="10" y="45" width="12" height="18" fill="#ff9e64"/>
      <rect x="58" y="45" width="12" height="18" fill="#ff9e64"/>
      {/* Legs */}
      <rect x="28" y="68" width="8" height="20" fill="#1f2937"/>
      <rect x="44" y="68" width="8" height="20" fill="#1f2937"/>
    </svg>
  );
}

/* Pixel Star */
function PixelStar() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      <polygon points="50,10 60,40 90,40 68,60 78,90 50,70 22,90 32,60 10,40 40,40" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
      <polygon points="50,25 56,42 72,42 59,52 65,70 50,60 35,70 41,52 28,42 44,42" fill="#fef3c7" opacity="0.7"/>
    </svg>
  );
}

/* Pixel Coin */
function PixelCoin() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      <circle cx="50" cy="50" r="45" fill="#fbbf24" stroke="#d97706" strokeWidth="3"/>
      <circle cx="50" cy="50" r="38" fill="#fcd34d"/>
      <text x="50" y="60" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#f59e0b">$</text>
    </svg>
  );
}

/* Pixel Heart */
function PixelHeart() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      <path d="M50,85 C30,70 10,55 10,38 C10,28 18,20 28,20 C35,20 42,25 50,32 C58,25 65,20 72,20 C82,20 90,28 90,38 C90,55 70,70 50,85 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
    </svg>
  );
}

/* Pixel Key */
function PixelKey() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      {/* Key head */}
      <circle cx="35" cy="50" r="20" fill="#92400e" stroke="#78350f" strokeWidth="2"/>
      {/* Key shaft */}
      <rect x="50" y="42" width="40" height="16" fill="#92400e" stroke="#78350f" strokeWidth="2"/>
      {/* Teeth */}
      <rect x="75" y="42" width="8" height="6" fill="#78350f"/>
      <rect x="75" y="52" width="8" height="6" fill="#78350f"/>
      {/* Highlight */}
      <circle cx="35" cy="45" r="8" fill="#d97706" opacity="0.6"/>
    </svg>
  );
}

/* Pixel Rocket */
function PixelRocket() {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      {/* Body */}
      <rect x="35" y="10" width="30" height="60" fill="#ef4444" stroke="#991b1b" strokeWidth="2"/>
      {/* Tip */}
      <polygon points="50,0 40,15 60,15" fill="#fbbf24"/>
      {/* Window */}
      <circle cx="50" cy="25" r="6" fill="#fef3c7"/>
      {/* Fins */}
      <polygon points="35,55 20,75 35,70" fill="#3b82f6"/>
      <polygon points="65,55 80,75 65,70" fill="#3b82f6"/>
      {/* Flame */}
      <polygon points="40,70 50,95 60,70 50,80" fill="#f59e0b"/>
      <polygon points="42,78 50,88 58,78 50,84" fill="#fbbf24"/>
    </svg>
  );
}

/* Pixel Gem */
function PixelGem() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      <polygon points="50,10 80,35 75,75 25,75 20,35" fill="#a855f7" stroke="#7e22ce" strokeWidth="2"/>
      <polygon points="50,10 80,35 65,40" fill="#d8b4fe" opacity="0.8"/>
      <polygon points="50,10 20,35 35,40" fill="#c4b5fd" opacity="0.6"/>
      <polygon points="80,35 75,75 65,40" fill="#9333ea" opacity="0.7"/>
    </svg>
  );
}

/* Pixel Cloud */
function PixelCloud() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="home__icon">
      <path d="M15,55 Q15,40 30,40 Q35,25 50,25 Q65,25 70,40 Q85,40 85,55 Z" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2"/>
      <circle cx="30" cy="65" r="8" fill="#7dd3fc" opacity="0.5"/>
      <circle cx="70" cy="70" r="6" fill="#7dd3fc" opacity="0.4"/>
    </svg>
  );
}

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Starfield */}
      <div className="home__stars" aria-hidden="true" />

      {/* Floating teal orbs */}
      <div className="home__orb home__orb--1" aria-hidden="true" />
      <div className="home__orb home__orb--2" aria-hidden="true" />
      <div className="home__orb home__orb--3" aria-hidden="true" />

      {/* Corner bracket decorations */}
      <div className="home__bracket home__bracket--tl" aria-hidden="true" />
      <div className="home__bracket home__bracket--tr" aria-hidden="true" />

      {/* Background pattern */}
      <div className="home__pattern" aria-hidden="true" />

      {/* Scattered game icons */}
      <div className="home__icon-container home__icon-container--1" aria-hidden="true">
        <PixelCharacter />
      </div>
      <div className="home__icon-container home__icon-container--2" aria-hidden="true">
        <PixelStar />
      </div>
      <div className="home__icon-container home__icon-container--3" aria-hidden="true">
        <PixelCoin />
      </div>
      <div className="home__icon-container home__icon-container--4" aria-hidden="true">
        <PixelHeart />
      </div>
      <div className="home__icon-container home__icon-container--5" aria-hidden="true">
        <PixelKey />
      </div>
      <div className="home__icon-container home__icon-container--6" aria-hidden="true">
        <PixelRocket />
      </div>
      <div className="home__icon-container home__icon-container--7" aria-hidden="true">
        <PixelGem />
      </div>
      <div className="home__icon-container home__icon-container--8" aria-hidden="true">
        <PixelCloud />
      </div>

      {/* Pixel decorations */}
      <div className="home__pixel home__pixel--1" aria-hidden="true" />
      <div className="home__pixel home__pixel--2" aria-hidden="true" />
      <div className="home__pixel home__pixel--3" aria-hidden="true" />

      {/* Hero Content — soft fade only (no vertical slide) for a calmer first impression */}
      <div className="home__content">
        <h1
          className="home__heading"
          data-aos="fade"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="0"
          data-aos-offset="0"
          data-aos-anchor-placement="top-center"
        >
          <span>Welcome</span>
          <span>to Tomorrow land 3.0</span>
        </h1>
        <p
          className="home__subheading"
          data-aos="fade"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="140"
          data-aos-offset="0"
          data-aos-anchor-placement="top-center"
        >
          Join us for an unforgettable innovation and gaming experience.
        </p>
      </div>

      {/* Perspective Grid Floor */}
      <div className="home__grid" aria-hidden="true">
        <GridFloor />
      </div>
    </section>
  );
}

/* Inline SVG perspective grid — matches the retro-futuristic floor in the design */
function GridFloor() {
  const width = 1440;
  const height = 420;
  const horizon = 10;
  const vanishX = width / 2;
  const bottom = height;

  // Vertical perspective lines
  const vLines = [];
  const cols = 16;
  for (let i = 0; i <= cols; i++) {
    const t = i / cols;
    const bx = t * width;
    vLines.push(
      <line
        key={`v${i}`}
        x1={vanishX}
        y1={horizon}
        x2={bx}
        y2={bottom}
        stroke="rgba(0,229,200,0.22)"
        strokeWidth="1"
      />
    );
  }

  // Horizontal perspective lines (evenly spaced in perspective)
  const hLines = [];
  const rows = 12;
  for (let j = 1; j <= rows; j++) {
    const t = (j / rows) ** 1.6; // power curve for perspective feel
    const y = horizon + t * (bottom - horizon);
    // Interpolate x from horizon point to full width edges
    const lx = vanishX - (vanishX * t);
    const rx = vanishX + (width - vanishX) * t;
    hLines.push(
      <line
        key={`h${j}`}
        x1={lx}
        y1={y}
        x2={rx}
        y2={y}
        stroke="rgba(0,229,200,0.22)"
        strokeWidth="1"
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,229,200,0.06)" />
        </linearGradient>
      </defs>
      {/* subtle floor fill */}
      <polygon
        points={`${vanishX},${horizon} 0,${bottom} ${width},${bottom}`}
        fill="url(#gridFade)"
      />
      {vLines}
      {hLines}
    </svg>
  );
}
