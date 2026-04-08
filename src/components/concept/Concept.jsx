import { useEffect, useState } from 'react';
import AOS from 'aos';
import './Concept.css';

import photoChair from './chair.jpg';
import photoCoChair from './co-chair.jpeg';
import photoLogisticsManager from './logistics_manager.jpg';
import photoLogisticsCoManager from './logistics_co_manager.jpeg';
import photoSponsoringManager from './sponsoring_manager.png';
import photoSponsorshipCoManager from './sponsorship_co_manager.jpg';
import photoProgramManager from './program_manager.JPG';
import photoWebmaster from './webmaster.jpeg';
import photoExternalRelations from './external_relation_manager.jpg';
import photoAmbassadorCoordinator from './ambassador_coordinator .jpg';
import photoMediaManager from './Media_Manager.jpeg';

function ConceptTeamThumb({ card, index }) {
	const [failed, setFailed] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const fallbackVariant = card.variant || 'd';

	if (!card.photo || failed) {
		return (
			<div
				className={`concept__thumb concept__thumb--${fallbackVariant}`}
				aria-hidden={!card.photo}
			/>
		);
	}

	const handleError = () => {
		setFailed(true);
		setLoaded(false);
	};

	return (
		<div
			className={`concept__thumb concept__thumb--photo concept__thumb--${fallbackVariant} ${loaded ? 'concept__thumb--loaded' : 'concept__thumb--loading'}`}
		>
			<img
				src={card.photo}
				alt=""
				className={`concept__thumb-img ${loaded ? 'concept__thumb-img--loaded' : 'concept__thumb-img--loading'}`}
				decoding="async"
				loading={index < 4 ? 'eager' : 'lazy'}
				fetchPriority={index < 2 ? 'high' : 'auto'}
				onLoad={() => setLoaded(true)}
				onError={handleError}
			/>
		</div>
	);
}

function ScrollOrnament() {
	return (
		<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M4 4 L50 4 L50 9 L9 9 L9 50 L4 50 Z" fill="#7a1010" opacity="0.8" />
			<path d="M4 4 L22 4 L22 7 L7 7 L7 22 L4 22 Z" fill="#7a1010" opacity="0.95" />
			<path d="M50 4 Q62 4 65 14 Q67 20 62 22 Q56 24 54 18 Q52 12 58 10" stroke="#9b1515" strokeWidth="2" fill="none" strokeLinecap="round" />
			<circle cx="65" cy="24" r="4" fill="none" stroke="#9b1515" strokeWidth="1.5" opacity="0.7" />
			<circle cx="65" cy="24" r="1.5" fill="#9b1515" opacity="0.8" />
			<path d="M4 50 Q4 62 14 65 Q20 67 22 62 Q24 56 18 54 Q12 52 10 58" stroke="#9b1515" strokeWidth="2" fill="none" strokeLinecap="round" />
			<circle cx="24" cy="65" r="4" fill="none" stroke="#9b1515" strokeWidth="1.5" opacity="0.7" />
			<circle cx="24" cy="65" r="1.5" fill="#9b1515" opacity="0.8" />
			<rect x="34" y="4" width="8" height="2.5" rx="1" fill="#9b1515" opacity="0.5" />
			<rect x="4" y="34" width="2.5" height="8" rx="1" fill="#9b1515" opacity="0.5" />
		</svg>
	);
}

const cards = [
	{
		name: 'Nour Cherni',
		role: 'Chair Event',
		bio: 'Sets the overall vision and priorities for Tomorrowland 3.0, aligning teams, milestones, and the attendee experience from kickoff to closing.',
		photo: photoChair,
	},
	{
		name: 'Molka Wesleti',
		role: 'Co-Chair Event',
		bio: 'Works hand-in-hand with the chair to drive planning, follow-through, and coordination so every workstream stays on track.',
		photo: photoCoChair,
	},
	{
		name: 'Ahlem Ben Ali',
		role: 'Logistics Manager',
		bio: 'Owns venues, schedules, equipment, and on-site flow—making sure sessions, breaks, and transitions feel effortless for everyone.',
		photo: photoLogisticsManager,
	},
	{
		name: 'Amal Nait Malek',
		role: 'Logistics Co-Manager',
		bio: 'Supports operations, vendor touchpoints, and backup plans so logistics stay resilient when the day gets busy.',
		photo: photoLogisticsCoManager,
	},
	{
		name: 'Houssem Eddine Nouar',
		role: 'Sponsoring Manager',
		bio: 'Builds and nurtures sponsor partnerships—shaping offers, visibility, and on-site presence that match the event’s identity.',
		photo: photoSponsoringManager,
	},
	{
		name: 'Naima Ben Mansour',
		role: 'Sponsorship Co-Manager',
		bio: 'Helps activate sponsorship packages, coordinate deliverables, and keep partners informed and valued throughout the journey.',
		photo: photoSponsorshipCoManager,
	},
	{
		name: 'Wejdene Jemili',
		role: 'Media Manager',
		bio: 'Shapes how Tomorrowland shows up online—content rhythm, coverage, and storytelling that keeps the community excited and informed.',
		photo: photoMediaManager,
		variant: 'd',
	},
	{
		name: 'Adam Kemicha',
		role: 'Program Manager',
		bio: 'Curates the program arc—sessions, timing, and speaker flow—so the agenda stays engaging, balanced, and on schedule.',
		photo: photoProgramManager,
	},
	{
		name: 'Amen Allah Bejaoui',
		role: 'Webmaster',
		bio: 'Maintains the website and digital touchpoints—updates, structure, and polish so information is always easy to find.',
		photo: photoWebmaster,
	},
	{
		name: 'Malek Ben Amdouni',
		role: 'External Relations Manager',
		bio: 'Represents Tomorrowland outward—schools, orgs, and partners—opening doors and strengthening the ecosystem around the event.',
		photo: photoExternalRelations,
	},
	{
		name: 'Wele Mhissen',
		role: 'Ambassador Coordinator',
		bio: 'Recruits, briefs, and synchronizes ambassadors so they can represent the event with clarity, energy, and consistency.',
		photo: photoAmbassadorCoordinator,
	},
];

export default function Concept() {
	useEffect(() => {
		const id = requestAnimationFrame(() => {
			AOS.refreshHard();
		});
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<section className="concept" id="concept">
			<div className="concept__ornament concept__ornament--bl">
				<ScrollOrnament />
			</div>
			<div className="concept__ornament concept__ornament--br">
				<ScrollOrnament />
			</div>

			<div className="concept__inner">
				<h2 className="concept__title" data-aos="fade-up" data-aos-duration="650">
					<span>Meet Our </span>
					<span>Core Team</span>
				</h2>

				<div className="concept__grid">
					{cards.map((card, index) => (
						<article className="concept__card" key={card.name}>
							<ConceptTeamThumb card={card} index={index} />
							<div
								className="concept__card-copy"
								data-aos="fade"
								data-aos-duration="600"
								data-aos-delay={Math.min(index * 40, 240)}
								data-aos-easing="ease-out-cubic"
							>
								<h3 className="concept__card-title">{card.name}</h3>
								<p className="concept__card-role">{card.role}</p>
								<p className="concept__card-body">{card.bio}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
