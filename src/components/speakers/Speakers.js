import './Speakers.css';
import '../ourprogram/OurProgram.css';

/* Same bezel art as OurProgram (no gradient ids — safe to duplicate on the page). */
function SpeakersOrnateFrame({ w, h }) {
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
			<text x="43" y="22.5" fill="#f3ec8c" fontFamily="'Press Start 2P', monospace" fontSize="4.2" letterSpacing="0.4">
				SPEAKERS // TBA
			</text>
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
			<path
				d={`M${w - 22} ${h - 34} C${w - 34} ${h - 34} ${w - 38} ${h - 22} ${w - 52} ${h - 22}`}
				fill="none"
				stroke="rgba(197,90,90,0.88)"
				strokeWidth="1.4"
			/>

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

export default function Speakers() {
	const w = 680;
	const h = 420;

	return (
		<section className="speakers" id="speakers">
			<div className="speakers__noise" aria-hidden="true" />

			<div className="speakers__inner">
				<header className="speakers__header" data-aos="fade-up">
					<p className="speakers__label">Conference Zone</p>
					<h2 className="speakers__title">Featured Speakers</h2>
					<p className="speakers__subtitle">
						 Check back for who is
						taking the stage at Tomorrow Land 3.0.
					</p>
				</header>

				<div className="speakers__monitor-stage" data-aos="fade-up" data-aos-delay="80">
					<div className="our-program__big-monitor">
						<div className="our-program__big-screen">
							<SpeakersOrnateFrame w={w} h={h} />

							<div className="our-program__announce" aria-label="Speakers to be announced">
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
			</div>
		</section>
	);
}
