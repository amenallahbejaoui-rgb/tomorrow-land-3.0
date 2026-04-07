import React from 'react';
import './OurProgram.css';

/*
  TOMMOROWLAND GAME-DEV SCENE (big monitor)
  Neon grid + dev HUD + wireframe + tool cards
*/
function PixelGameScene({ w, h }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}
    >
      <defs>
        <linearGradient id="devBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#102452" />
          <stop offset="55%" stopColor="#142d66" />
          <stop offset="100%" stopColor="#0f224e" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3d7f" />
          <stop offset="100%" stopColor="#112a59" />
        </linearGradient>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(87,223,243,0.22)" />
          <stop offset="100%" stopColor="rgba(87,223,243,0.02)" />
        </linearGradient>
        <linearGradient id="accentBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#55dff2" />
          <stop offset="100%" stopColor="#e05c75" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="tinyGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="rgba(140,200,255,0.16)" strokeWidth="1" />
        </pattern>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="0.9" fill="rgba(214,236,255,0.26)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width={w} height={h} fill="url(#devBg)" />
      <rect x="16" y="46" width={w - 32} height={h - 82} rx="12" fill="url(#tinyGrid)" />
      <rect x="16" y="46" width={w - 32} height={h - 82} rx="12" fill="url(#gridFade)" />

      <rect x="26" y="14" width={w - 52} height="24" rx="10" fill="rgba(13,22,52,0.92)" stroke="rgba(90,225,244,0.34)" />
      <circle cx="42" cy="26" r="3" fill="#f0677d" />
      <circle cx="54" cy="26" r="3" fill="#f3ca65" />
      <circle cx="66" cy="26" r="3" fill="#5ce4b0" />
      <text x="84" y="29" fill="#d2e6ff" fontFamily="'Press Start 2P', monospace" fontSize="6" letterSpacing="1.1">
        TOMMOROWLAND // GAME DEV
      </text>

      <rect x="34" y="64" width="210" height="138" rx="10" fill="url(#panelGrad)" stroke="rgba(86,220,240,0.36)" />
      <rect x="46" y="78" width="72" height="6" rx="3" fill="url(#accentBar)" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={`code-${i}`}>
          <rect x="46" y={92 + i * 14} width={130 - i * 8} height="5" rx="2" fill="rgba(200,225,255,0.72)" />
          <rect x="182" y={92 + i * 14} width={44 + (i % 2) * 10} height="5" rx="2" fill="rgba(83,220,243,0.66)" />
        </g>
      ))}

      <rect x={w - 258} y="64" width="224" height="138" rx="10" fill="rgba(17,36,78,0.88)" stroke="rgba(236,123,145,0.4)" />
      <rect x={w - 246} y="78" width="100" height="6" rx="3" fill="rgba(239,164,120,0.84)" />
      <polygon points={`${w - 222},184 ${w - 168},112 ${w - 120},176`} fill="rgba(100,222,124,0.66)" />
      <polygon points={`${w - 186},184 ${w - 140},128 ${w - 94},184`} fill="rgba(72,186,210,0.76)" />
      <rect x={w - 232} y="188" width="184" height="5" rx="2" fill="rgba(215,236,255,0.48)" />

      <g filter="url(#softGlow)">
        <polygon points={`${w * 0.5},150 ${w * 0.57},190 ${w * 0.5},230 ${w * 0.43},190`} fill="none" stroke="rgba(95,225,244,0.9)" strokeWidth="2" />
        <polygon points={`${w * 0.5},130 ${w * 0.57},170 ${w * 0.5},210 ${w * 0.43},170`} fill="none" stroke="rgba(227,109,138,0.86)" strokeWidth="2" />
        <line x1={w * 0.43} y1="170" x2={w * 0.43} y2="190" stroke="rgba(210,235,255,0.86)" strokeWidth="2" />
        <line x1={w * 0.57} y1="170" x2={w * 0.57} y2="190" stroke="rgba(210,235,255,0.86)" strokeWidth="2" />
        <line x1={w * 0.5} y1="130" x2={w * 0.5} y2="150" stroke="rgba(210,235,255,0.86)" strokeWidth="2" />
        <line x1={w * 0.5} y1="210" x2={w * 0.5} y2="230" stroke="rgba(210,235,255,0.86)" strokeWidth="2" />
      </g>

      <rect x="34" y={h - 120} width="160" height="74" rx="10" fill="rgba(16,34,74,0.9)" stroke="rgba(86,220,240,0.35)" />
      <rect x="46" y={h - 106} width="100" height="5" rx="2" fill="rgba(234,238,245,0.82)" />
      <rect x="46" y={h - 92} width="72" height="5" rx="2" fill="rgba(89,226,246,0.7)" />
      <rect x="46" y={h - 78} width="58" height="5" rx="2" fill="rgba(232,108,142,0.7)" />

      <rect x={w - 194} y={h - 120} width="160" height="74" rx="10" fill="rgba(16,34,74,0.9)" stroke="rgba(236,123,145,0.36)" />
      <rect x={w - 182} y={h - 106} width="132" height="5" rx="2" fill="rgba(232,236,242,0.78)" />
      <rect x={w - 182} y={h - 92} width="92" height="5" rx="2" fill="rgba(237,168,118,0.82)" />
      <rect x={w - 182} y={h - 78} width="110" height="5" rx="2" fill="rgba(96,225,244,0.72)" />

      <g fill="rgba(255,255,255,0.82)" fontFamily="'Press Start 2P', monospace" fontSize="7">
        <rect x={w * 0.35} y={h * 0.28} width="54" height="20" rx="10" fill="rgba(18,39,86,0.85)" stroke="rgba(95,225,244,0.5)" />
        <text x={w * 0.35 + 10} y={h * 0.28 + 13}>AI</text>
        <rect x={w * 0.58} y={h * 0.27} width="74" height="20" rx="10" fill="rgba(18,39,86,0.85)" stroke="rgba(236,123,145,0.5)" />
        <text x={w * 0.58 + 10} y={h * 0.27 + 13}>UX/UI</text>
      </g>

      <rect x="0" y="0" width={w} height={h} fill="url(#dots)" opacity="0.22" />
      <rect x="0" y="0" width={w} height={h} fill="rgba(5,8,20,0.16)" />
      <rect x="10" y="10" width={w - 20} height={h - 20} rx="16" fill="none" stroke="rgba(87,223,243,0.18)" />
      <rect x="18" y="18" width={w - 36} height={h - 36} rx="12" fill="none" stroke="rgba(239,108,142,0.16)" />
    </svg>
  );
}

/* Small monitor scene */
function SmallGameScene({ w, h }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}
    >
      <defs>
        <linearGradient id="smallBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1a52" />
          <stop offset="100%" stopColor="#1b123a" />
        </linearGradient>
        <linearGradient id="smallPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#463188" />
          <stop offset="100%" stopColor="#2d225f" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={w} height={h} fill="url(#smallBg)" />

      <rect x="12" y="12" width={w - 24} height={h - 24} rx="8" fill="none" stroke="rgba(100,220,245,0.28)" />
      <rect x="18" y="18" width={w - 36} height={h - 36} rx="6" fill="none" stroke="rgba(244,173,104,0.28)" />

      <rect x="20" y="24" width={w - 40} height="14" rx="7" fill="rgba(12,16,40,0.78)" stroke="rgba(100,220,245,0.34)" />
      <circle cx="30" cy="31" r="2" fill="#f06b84" />
      <circle cx="38" cy="31" r="2" fill="#f2cc71" />
      <circle cx="46" cy="31" r="2" fill="#65e4af" />
      <text x="56" y="33" fill="#dee7ff" fontFamily="'Press Start 2P', monospace" fontSize="3.4">SPONSOR HUD</text>

      <rect x="24" y="50" width={w * 0.44} height={h * 0.45} rx="7" fill="url(#smallPanel)" stroke="rgba(100,220,245,0.28)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`s-line-${i}`} x="30" y={60 + i * 12} width={52 + (i % 2) * 18} height="4" rx="2" fill="rgba(214,229,255,0.78)" />
      ))}

      <rect x={w * 0.54} y="50" width={w * 0.34} height={h * 0.45} rx="7" fill="rgba(28,22,56,0.86)" stroke="rgba(244,173,104,0.35)" />
      <polygon points={`${w * 0.68},70 ${w * 0.79},108 ${w * 0.59},108`} fill="rgba(106,231,188,0.72)" />
      <rect x={w * 0.58} y="114" width={w * 0.26} height="4" rx="2" fill="rgba(224,236,255,0.74)" />
      <rect x={w * 0.58} y="123" width={w * 0.18} height="4" rx="2" fill="rgba(95,225,244,0.72)" />

      <rect x="24" y={h - 34} width={w - 48} height="8" rx="4" fill="rgba(18,14,34,0.82)" />
      <rect x="30" y={h - 31} width={w * 0.38} height="2" rx="1" fill="rgba(102,224,244,0.76)" />
      <rect x={w * 0.58} y={h - 31} width={w * 0.24} height="2" rx="1" fill="rgba(233,124,154,0.74)" />

      <rect x="0" y="0" width={w} height={h} fill="rgba(10,6,20,0.14)" />
    </svg>
  );
}

function OrnateFrameOverlay({ w, h }) {
  return (
    <svg
      className="our-program__bezel-svg"
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect x="6" y="6" width={w - 12} height={h - 12} rx="16" fill="none" stroke="#28142f" strokeWidth="4" />
      <rect x="10" y="10" width={w - 20} height={h - 20} rx="14" fill="none" stroke="#8f2e3c" strokeWidth="2.5" />

      <rect x="24" y="20" width={w - 48} height={h - 40} rx="8" fill="none" stroke="rgba(76,225,241,0.72)" strokeWidth="2.2" />
      <rect x="28" y="24" width={w - 56} height={h - 48} rx="6" fill="none" stroke="rgba(11,45,93,0.86)" strokeWidth="1.8" />

      <line x1="28" y1="18" x2={w * 0.43} y2="18" stroke="rgba(197,90,90,0.9)" strokeWidth="1.4" />
      <line x1={w * 0.57} y1="18" x2={w - 28} y2="18" stroke="rgba(197,90,90,0.9)" strokeWidth="1.4" />
      <line x1={w * 0.43} y1="18" x2={w * 0.445} y2="16.3" stroke="rgba(197,90,90,0.9)" strokeWidth="1.2" />
      <line x1={w * 0.57} y1="18" x2={w * 0.555} y2="16.3" stroke="rgba(197,90,90,0.9)" strokeWidth="1.2" />

      <rect x="34" y="14" width="104" height="12" rx="6" fill="rgba(16,20,45,0.85)" stroke="rgba(84,220,238,0.35)" strokeWidth="0.9" />
      <text x="43" y="22.5" fill="#f3ec8c" fontFamily="'Press Start 2P', monospace" fontSize="4.2" letterSpacing="0.4">SEGT NOTING ANS</text>
      <circle cx="154" cy="20" r="2.6" fill="#16d5bf" />

      {[66, 94, 122, 150, 178, 206, 234, 262, 290, 318, 346].map((yy) => (
        <g key={`tick-l-${yy}`}>
          <line x1="22" y1={yy} x2="22" y2={yy + 8} stroke="rgba(197,90,90,0.84)" strokeWidth="1.5" />
          <line x1={w - 22} y1={yy + 2} x2={w - 22} y2={yy + 10} stroke="rgba(197,90,90,0.84)" strokeWidth="1.5" />
        </g>
      ))}

      <path d="M22 34 C34 34 38 22 52 22" fill="none" stroke="rgba(197,90,90,0.88)" strokeWidth="1.4" />
      <path d={`M${w - 22} 34 C${w - 34} 34 ${w - 38} 22 ${w - 52} 22`} fill="none" stroke="rgba(197,90,90,0.88)" strokeWidth="1.4" />
      <path d={`M22 ${h - 34} C34 ${h - 34} 38 ${h - 22} 52 ${h - 22}`} fill="none" stroke="rgba(197,90,90,0.88)" strokeWidth="1.4" />
      <path d={`M${w - 22} ${h - 34} C${w - 34} ${h - 34} ${w - 38} ${h - 22} ${w - 52} ${h - 22}`} fill="none" stroke="rgba(197,90,90,0.88)" strokeWidth="1.4" />

      <rect x="36" y={h - 34} width={w - 72} height="10" rx="4" fill="rgba(14,18,40,0.7)" />
      <rect x="38" y={h - 33} width={w - 76} height="8" rx="3" fill="rgba(230,226,210,0.95)" />
      <rect x={w * 0.14} y={h - 33} width={14} height="8" fill="rgba(14,18,40,0.78)" />
      <rect x={w * 0.31} y={h - 33} width={11} height="8" fill="rgba(14,18,40,0.78)" />
      <rect x={w * 0.5} y={h - 33} width={16} height="8" fill="rgba(14,18,40,0.78)" />
      <rect x={w * 0.68} y={h - 33} width={12} height="8" fill="rgba(14,18,40,0.78)" />
      <rect x={w * 0.84} y={h - 33} width={10} height="8" fill="rgba(14,18,40,0.78)" />
    </svg>
  );
}

export default function OurProgram() {
  return (
    <section className="our-program" id="our-program">
      <div className="our-program__left" data-aos="fade-right" data-aos-duration="800">
        <div>
         
          <h2 className="our-program__heading">Sponsors</h2>
          <p className="our-program__body">Meet our sponsors.</p>
        </div>

        <div className="our-program__small-monitor">
          <div className="our-program__small-screen">
            <SmallGameScene w={268} h={192} />

            <div className="our-program__announce our-program__announce--small" aria-label="Small sponsors announcement">
              <span>TO BE</span>
              <span>ANNOUNCED...</span>
            </div>

            <div className="our-program__scanlines" />
          </div>
          <div className="our-program__small-neck" />
          <div className="our-program__small-base" />
          <div className="our-program__small-shadow" />
        </div>
      </div>

      <div className="our-program__right" data-aos="fade-left" data-aos-duration="800">
        <div className="our-program__big-monitor">
          <div className="our-program__big-screen">
            <OrnateFrameOverlay w={680} h={420} />
            <PixelGameScene w={680} h={420} />

            <div className="our-program__announce" aria-label="Sponsors announcement">
              <span>TO BE</span>
              <span>ANNOUNCED...</span>
            </div>

            <div className="our-program__scanlines" />
          </div>
          <div className="our-program__stand-neck" />
          <div className="our-program__stand-base" />
          <div className="our-program__stand-shadow" />
        </div>
      </div>
    </section>
  );
}
