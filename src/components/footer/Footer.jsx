import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer" id="footer">
			<div className="footer__shell">
				<div className="footer__top">
					<div
						className="footer__left"
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="750"
						data-aos-offset="-140"
						data-aos-anchor-placement="top-bottom"
					>
						<p className="footer__eyebrow">Tomorrow land Hackathon</p>
						<h3 className="footer__brand">Tomorrow land </h3>
						<div className="footer__text">
							<p className="footer__brief">
								Tomorrow Land is a hackathon event that brings together IEEE Computer Society members, game developers,
								and tech enthusiasts to build, collaborate, and innovate.
							</p>
						</div>
					</div>

					<div
						className="footer__right"
						data-aos="fade-up"
						data-aos-delay="60"
						data-aos-duration="750"
						data-aos-offset="-140"
						data-aos-anchor-placement="top-bottom"
					>
						<div className="footer__partners" aria-label="Partners">
							
							<div className="footer__logo-tile">
								<img src="/cs.png" alt="Computer Society logo" className="footer__tile-logo" />
							</div>
							<div className="footer__logo-tile">
								<img src="/ensit.png" alt="ENSIT logo" className="footer__tile-logo" />
							</div>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<nav className="footer__links" aria-label="Footer links">
						<a href="#about-tommorowland-container">About Tomorrowland</a>
						<a href="#planning">Planning</a>
						<a href="#about">Register</a>
					</nav>

					<div className="footer__line" />
				</div>
			</div>
		</footer>
	);
}
