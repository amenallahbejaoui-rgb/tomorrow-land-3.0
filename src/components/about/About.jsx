import React from 'react';
import './About.css';
import registrationPoster from './662573535_1537591057946524_4155483361311124457_n.jpg';

/* ══════════════════════════════════════════
   CORNER SCROLL ORNAMENT
   Vintage red curl flourish like in reference
══════════════════════════════════════════ */
function ScrollOrnament() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer thick frame corner */}
      <path d="M4 4 L50 4 L50 9 L9 9 L9 50 L4 50 Z" fill="#7a1010" opacity="0.8"/>
      {/* Inner thin corner */}
      <path d="M4 4 L22 4 L22 7 L7 7 L7 22 L4 22 Z" fill="#7a1010" opacity="0.95"/>
      {/* Top curl */}
      <path d="M50 4 Q62 4 65 14 Q67 20 62 22 Q56 24 54 18 Q52 12 58 10"
        stroke="#9b1515" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="65" cy="24" r="4" fill="none" stroke="#9b1515" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="65" cy="24" r="1.5" fill="#9b1515" opacity="0.8"/>
      {/* Side curl */}
      <path d="M4 50 Q4 62 14 65 Q20 67 22 62 Q24 56 18 54 Q12 52 10 58"
        stroke="#9b1515" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="24" cy="65" r="4" fill="none" stroke="#9b1515" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="24" cy="65" r="1.5" fill="#9b1515" opacity="0.8"/>
      {/* Tick marks */}
      <rect x="34" y="4" width="8" height="2.5" rx="1" fill="#9b1515" opacity="0.5"/>
      <rect x="4" y="34" width="2.5" height="8" rx="1" fill="#9b1515" opacity="0.5"/>
    </svg>
  );
}

/* ══════════════════════════════════════════
   PIXEL STAR field
══════════════════════════════════════════ */
function PixelStars({ w, h }) {
  const stars = [
    [0.1,0.15],[0.25,0.08],[0.45,0.18],[0.62,0.1],[0.78,0.2],[0.9,0.12],
    [0.18,0.28],[0.38,0.22],[0.7,0.26],[0.85,0.3],[0.05,0.35],[0.55,0.32],
  ];
  return (
    <svg width={w} height={h} style={{position:'absolute',inset:0,zIndex:3}} xmlns="http://www.w3.org/2000/svg">
      {stars.map(([rx,ry],i) => (
        <rect key={i}
          x={rx*w - 1} y={ry*h - 1}
          width={i%3===0?2:1} height={i%3===0?2:1}
          fill={i%4===0?'#00e5c8':'rgba(255,255,255,0.7)'}
          opacity={0.5+((i*0.13)%0.5)}
        />
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════
   MARIO-STYLE PIXEL GROUND + TREES
   Hand-painted look with pixel-block trees
══════════════════════════════════════════ */
function MarioGround({ w, h = 70 }) {
  // Pixel tree builder
  const trees = [
    { x: 0.04, scale: 1.1, dark: true },
    { x: 0.13, scale: 0.85, dark: false },
    { x: 0.22, scale: 1.3, dark: true },
    { x: 0.32, scale: 0.9, dark: false },
    { x: 0.42, scale: 1.05, dark: true },
    { x: 0.52, scale: 1.2, dark: false },
    { x: 0.62, scale: 0.88, dark: true },
    { x: 0.72, scale: 1.15, dark: false },
    { x: 0.82, scale: 1.0, dark: true },
    { x: 0.91, scale: 0.9, dark: false },
    { x: 0.97, scale: 1.1, dark: true },
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
      <defs>
        {/* Hill gradient */}
        <linearGradient id="hillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4a1a"/>
          <stop offset="100%" stopColor="#0f2e0f"/>
        </linearGradient>
      </defs>

      {/* Sky fill (dark blue lower portion) */}
      <rect x="0" y="0" width={w} height={h} fill="transparent"/>

      {/* Rolling hills — 3 layers for depth */}
      <ellipse cx={w*0.18} cy={h*0.72} rx={w*0.3}  ry={h*0.45} fill="#17401a"/>
      <ellipse cx={w*0.55} cy={h*0.78} rx={w*0.45}  ry={h*0.5}  fill="#123812"/>
      <ellipse cx={w*0.88} cy={h*0.70} rx={w*0.28}  ry={h*0.42} fill="#17401a"/>

      {/* Ground strip */}
      <rect x="0" y={h*0.62} width={w} height={h*0.38} fill="#0f2e0f"/>
      {/* Ground highlight edge */}
      <rect x="0" y={h*0.62} width={w} height="2" fill="#1e5a1e" opacity="0.7"/>

      {/* Pixel trees — Mario style (solid block triangles with trunk) */}
      {trees.map(({ x, scale, dark }, i) => {
        const cx = w * x;
        const tH  = h * 0.55 * scale;
        const tW  = w * 0.06 * scale;
        const base = h * 0.65;
        const trunkW = tW * 0.22;
        const trunkH = tH * 0.2;
        const fill1 = dark ? '#1b5c1b' : '#237a23';
        const fill2 = dark ? '#2a7a2a' : '#30a030';
        const fill3 = dark ? '#164e16' : '#1d661d';
        return (
          <g key={i}>
            {/* Trunk */}
            <rect
              x={cx - trunkW/2} y={base - trunkH}
              width={trunkW} height={trunkH + 2}
              fill="#5c3a1a"
            />
            {/* Bottom tier */}
            <polygon
              points={`${cx},${base-tH*0.55} ${cx+tW},${base} ${cx-tW},${base}`}
              fill={fill3}
            />
            {/* Mid tier */}
            <polygon
              points={`${cx},${base-tH*0.75} ${cx+tW*0.75},${base-tH*0.3} ${cx-tW*0.75},${base-tH*0.3}`}
              fill={fill1}
            />
            {/* Top tier */}
            <polygon
              points={`${cx},${base-tH} ${cx+tW*0.5},${base-tH*0.55} ${cx-tW*0.5},${base-tH*0.55}`}
              fill={fill2}
            />
            {/* Highlight on top */}
            <polygon
              points={`${cx},${base-tH*0.98} ${cx+tW*0.2},${base-tH*0.7} ${cx-tW*0.15},${base-tH*0.7}`}
              fill="rgba(255,255,255,0.1)"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

// Screen A — sidebar color blocks (Mario inventory style)
const SIDEBAR_BLOCKS = [
  { color: '#e53935', w: 70 },
  { color: '#43a047', w: 58 },
  { color: '#1e88e5', w: 65 },
  { color: '#fb8c00', w: 52 },
  { color: '#8e24aa', w: 60 },
];

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
export default function About() {
  const sA = { w: 260, h: 175 };
  const sB = { w: 310, h: 208 };

  return (
    <section className="about" id="about">

      {/* Vintage scroll corner ornaments */}
      <div className="about__ornament about__ornament--tl"><ScrollOrnament /></div>
      <div className="about__ornament about__ornament--tr"><ScrollOrnament /></div>

      {/* ────── MONITORS ────── */}
      <div className="about__monitors" data-aos="fade-up" data-aos-duration="700">

        {/* ── Monitor A: PREVIEW ── */}
        <div className="about__monitor">
          <div className="about__screen" style={{ width: sA.w, height: sA.h }}>
            {/* Sky */}
            <div className="about__sky" />
            <PixelStars w={sA.w} h={sA.h} />

            {/* Sidebar color blocks */}
            <div className="about__sidebar">
              {SIDEBAR_BLOCKS.map((b, i) => (
                <div key={i} className="about__sidebar-block"
                  style={{ background: b.color, width: b.w }} />
              ))}
            </div>

            {/* Floating moon orb */}
            <div className="about__moon" />

            {/* Center label */}
            <div className="about__screen-label">
              <span style={{display:'block',marginBottom:3}}>PREVIEW</span>
              <span style={{fontSize:'4px',opacity:0.55,display:'block'}}>Stream·Catalog·v1.0</span>
            </div>

            {/* Mario-style ground + trees */}
            <div className="about__ground">
              <MarioGround w={sA.w} h={72} />
            </div>

            <div className="about__poster">
              <img src={registrationPoster} alt="Tomorrowland registration is now open" className="about__poster-img" />
              <div className="about__poster-badge">Registration Open</div>
            </div>

            <div className="about__scanlines" />
            <div className="about__glare" />
          </div>
          <div className="about__stand-neck" />
          <div className="about__stand-base" />
          <div className="about__stand-shadow" />
        </div>

        {/* ── Monitor B: KEY MODULES ── */}
        <div className="about__monitor">
          <div className="about__screen" style={{ width: sB.w, height: sB.h }}>
            <div className="about__poster">
              <img src={registrationPoster} alt="Tomorrowland registration is now open" className="about__poster-img" />
              <div className="about__poster-badge">Registration Open</div>
            </div>

            <div className="about__scanlines" />
            <div className="about__glare" />
          </div>
          <div className="about__stand-neck" />
          <div className="about__stand-base" />
          <div className="about__stand-shadow" />
        </div>

      </div>{/* /monitors */}

      {/* ────── TEXT BLOCK ────── */}
      <div className="about__text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="80">
        <p className="about__label">
          <span className="about__label-line" />
          About Program
        </p>
        <h2 className="about__heading">
          <span className="line-dark">Tomorrow land </span>
          <span className="line-red">Registration Live</span>
        </h2>
        <p className="about__body">
          Hurry up and register for Tomorrow land now. Secure your spot early and
          join the ultimate game-dev experience before places are gone.
        </p>
        <a
          className="about__cta"
          href="https://forms.gle/moLtMvPg1eEaPDhU7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>

    </section>
  );
}
