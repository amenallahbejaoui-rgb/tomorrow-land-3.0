import React from 'react';
import './planning.css';

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

const dayOneAgenda = [
    {
        time: '10:30',
        title: 'Check-In',
        description: 'Welcome participants, distribute welcome kits, and open networking with attendees.',
    },
    {
        time: '11:30',
        title: 'Opening Ceremony',
        description: 'Official launch with remarks from organizers, partners, and invited guests.',
    },
    {
        time: '12:00 - 13:00',
        title: 'IEEE CS Benefits + Young Professionals Panel',
        description: 'Membership value, global opportunities, and YP insights from student life to tech careers.',
    },
    {
        time: '13:00 - 14:00',
        title: 'Panel Discussion: The Hook Factor - Why We Play',
        description: 'Experts discuss game psychology, player retention, design hooks, and engagement factors.',
    },
    {
        time: '14:00 - 14:30',
        title: 'Lunch Break',
        description: 'Recharge and informal networking.',
    },
    {
        time: '14:30 - 15:45',
        title: 'Soft Skills Workshop - Level Up Your Connections',
        description: 'Communication, emotional intelligence, public speaking, teamwork, and collaboration drills.',
    },
    {
        time: '16:00 - 17:00',
        title: 'UI/UX Workshop - Think. Design. Interact.',
        description: 'Hands-on challenge with mentors to prototype game interfaces focused on usability and storytelling.',
    },
    {
        time: '17:00 - 17:30',
        title: 'Coffee Break',
        description: 'Short break before evening keynote and technical sessions.',
    },
    {
        time: '17:45 - 18:45',
        title: 'Keynote - Tejas Pravinbhai Patel',
        description: 'Industry-focused keynote session on innovation, technology, and career growth.',
    },
    {
        time: '19:00 - 20:30',
        title: 'Game Development Workshop',
        description: 'Unity/Unreal pipelines, architecture, logic design, and practical development workflows.',
    },
    {
        time: '20:30 - 21:00',
        title: 'Dinner',
        description: 'Dinner break for all participants and invited experts.',
    },
    {
        time: '21:00 - 22:30',
        title: 'Social and Networking Activities',
        description: 'Social games and talent show; in parallel, PCs and consoles remain open for warm-up sessions.',
    },
    {
        time: '22:30 - 23:30',
        title: 'Surprise Challenge',
        description: 'Interactive mystery challenge designed to boost team creativity and quick thinking.',
    },
    {
        time: '23:30 - 00:00',
        title: 'Hackathon Briefing and Team Formation',
        description: 'Briefing, rules, judging criteria, team finalization, and preparation before launch.',
    },
    {
        time: '00:00+',
        title: 'Game Jam and Gaming Tournament Launch',
        description: 'Overnight innovation challenge starts; in parallel, FIFA and Valorant tournament rounds begin.',
    },
];

const dayTwoAgenda = [
    {
        time: '08:30',
        title: 'Junior Participants Check-In',
        description: 'Welcome junior attendees and organize tournament/workshop groups.',
    },
    {
        time: '09:00 - 12:00',
        title: 'Scratch Workshop + Junior Gaming Competition',
        description: 'Scratch workshop for juniors and start of junior competition rounds and gaming finals.',
    },
    {
        time: '10:00',
        title: 'Hackathon Submission Deadline',
        description: 'Final project submission for all game jam teams.',
    },
    {
        time: '10:30 - 12:00',
        title: 'Pitch Presentations',
        description: 'Teams present concepts, interface prototypes, and game mechanics to the jury.',
    },
    {
        time: '12:30',
        title: 'Closing Ceremony',
        description: 'Thank-you speech, appreciation letters, and winner announcements across all competitions.',
    },
    {
        time: 'Award Tracks',
        title: 'Final Announcements',
        description: 'Best Ambassador, Junior Champions, Main Tournament Champions, and Best Game Concept Pitch.',
    },
];

const lanePattern = [56, 48, 62, 46, 60, 50, 58, 47];

function buildRoadStops(agenda, startId = 1) {
    const step = 84 / Math.max(agenda.length - 1, 1);

    return agenda.map((item, index) => ({
        ...item,
        id: startId + index,
        top: `${8 + index * step}%`,
        left: `${lanePattern[index % lanePattern.length]}%`,
        side: index % 2 === 0 ? 'right' : 'left',
    }));
}

const Planning = () => {
    const dayOneStops = buildRoadStops(dayOneAgenda, 1);
    const dayTwoStops = buildRoadStops(dayTwoAgenda, dayOneAgenda.length + 1);

    return (
        <section className="planning" id="planning">
            <div className="planning__ornament planning__ornament--tl"><ScrollOrnament /></div>
            <div className="planning__ornament planning__ornament--tr"><ScrollOrnament /></div>

            <div className="planning__inner">
                <div className="planning__board">
                    <div className="planning__board-header" data-aos="fade-up">
                        <p className="planning__label">Event Timeline</p>
                        <h2 className="planning__title">Tomorrow land 3.0</h2>
                        <p className="planning__meta">Tentative Date: 18 and 19 April 2026</p>
                    </div>

                    <div className="planning__maps">
                        <section className="planning__map" aria-label="Day 1 roadmap" data-aos="fade-up" data-aos-delay="60">
                            <header className="planning__map-header">
                                <h3>Day 1</h3>
                                <p>18 April 2026</p>
                            </header>

                            <div className="planning__map-road planning__map-road--long">
                                <div className="planning__route" aria-hidden="true">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="planning__route-svg">
                                        <path
                                            d="M52 100 C52 93, 35 92, 35 84 C35 76, 66 75, 66 67 C66 59, 34 58, 34 50 C34 42, 64 41, 64 33 C64 25, 38 24, 38 16 C38 10, 52 8, 52 0"
                                            className="planning__route-path"
                                        />
                                        <path
                                            d="M52 100 C52 93, 35 92, 35 84 C35 76, 66 75, 66 67 C66 59, 34 58, 34 50 C34 42, 64 41, 64 33 C64 25, 38 24, 38 16 C38 10, 52 8, 52 0"
                                            className="planning__route-dash"
                                        />
                                    </svg>
                                </div>

                                {dayOneStops.map((item) => (
                                    <article
                                        key={`d1-${item.id}`}
                                        className={`planning__stop planning__stop--${item.side}`}
                                        style={{ top: item.top, left: item.left }}
                                    >
                                        <div className="planning__node" aria-hidden="true">
                                            <span>{item.id}</span>
                                        </div>
                                        <div className="planning__stop-content">
                                            <p className="planning__time">{item.time}</p>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className="planning__map" aria-label="Day 2 roadmap" data-aos="fade-up" data-aos-delay="100">
                            <header className="planning__map-header">
                                <h3>Day 2</h3>
                                <p>19 April 2026</p>
                            </header>

                            <div className="planning__map-road planning__map-road--short">
                                <div className="planning__route" aria-hidden="true">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="planning__route-svg">
                                        <path
                                            d="M52 100 C52 90, 36 88, 36 77 C36 66, 66 64, 66 53 C66 42, 36 40, 36 29 C36 18, 58 15, 58 0"
                                            className="planning__route-path"
                                        />
                                        <path
                                            d="M52 100 C52 90, 36 88, 36 77 C36 66, 66 64, 66 53 C66 42, 36 40, 36 29 C36 18, 58 15, 58 0"
                                            className="planning__route-dash"
                                        />
                                    </svg>
                                </div>

                                {dayTwoStops.map((item) => (
                                    <article
                                        key={`d2-${item.id}`}
                                        className={`planning__stop planning__stop--${item.side}`}
                                        style={{ top: item.top, left: item.left }}
                                    >
                                        <div className="planning__node" aria-hidden="true">
                                            <span>{item.id}</span>
                                        </div>
                                        <div className="planning__stop-content">
                                            <p className="planning__time">{item.time}</p>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Planning;
