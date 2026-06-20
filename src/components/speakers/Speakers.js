import './Speakers.css';

import speaker1 from './images/675858269_122165705708741314_2076558115603600619_n.jpg';
import speaker2 from './images/671824587_122165705834741314_521688727147619614_n.jpg';
import speaker3 from './images/672231617_122165705660741314_2572941821749878854_n.jpg';
import speaker4 from './images/671697117_122165705792741314_4269925670515150149_n.jpg';
import speaker5 from './images/672673044_122165705750741314_5798889322415132380_n.jpg';

export default function Speakers() {
	const speakers = [
		{ id: 1, image: speaker1, name: 'Speaker 1' },
		{ id: 2, image: speaker2, name: 'Speaker 2' },
		{ id: 3, image: speaker3, name: 'Speaker 3' },
		{ id: 4, image: speaker4, name: 'Speaker 4' },
		{ id: 5, image: speaker5, name: 'Speaker 5' }
	];

	return (
		<section className="speakers" id="speakers">
			<div className="speakers__noise" aria-hidden="true" />

			<div className="speakers__inner">
				<header className="speakers__header" data-aos="fade-up">
					<p className="speakers__label">Conference Zone</p>
					<h2 className="speakers__title">Featured Speakers</h2>
					<p className="speakers__subtitle">
						Meet the speakers taking the stage at Tomorrow Land 3.0.
					</p>
				</header>

				<div className="speakers__grid" data-aos="fade-up" data-aos-delay="80">
					{speakers.map((speaker) => (
						<div key={speaker.id} className="speakers__card">
							<img src={speaker.image} alt={speaker.name} className="speakers__card-image" />
							<div className="speakers__card-overlay">
								<h3 className="speakers__card-name">{speaker.name}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
