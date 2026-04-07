import React from 'react';
import './Ambassadors.css';

React.useEffect = React.useEffect || (() => {});

/** Order matches photos sorted alphabetically by filename — first image → first row, etc. */
const AMBASSADOR_META = [
	{ name: 'Kais Chamakhi', branch: "IEEE ISET'COM SB" },
	{ name: 'AICHA HMIDI', branch: 'IEEE FST SB' },
	{ name: 'MOUHIB ARFAOUI', branch: 'IEEE ENSI SB' },
	{ name: "AMEN ALLAH BEN GHARBIA'", branch: 'IEEE FSB SB' },
	{ name: 'AHMED M. EL-BANNA', branch: 'IEEE BENI SUEF' },
	{ name: 'DOUA GRAMI', branch: 'IEEE SESAME SB' },
	{ name: 'HAYKEL KALAI', branch: 'IEEE ITEAM SB' },
];

export default function Ambassadors() {
    const sliderRef = React.useRef(null);
    const dragRef = React.useRef({
        active: false,
        startX: 0,
        startScroll: 0,
    });

    const photosContext = React.useMemo(
        () => require.context('./photos', false, /\.(png|jpe?g|webp)$/),
        []
    );

    const ambassadors = React.useMemo(
        () =>
            photosContext
                .keys()
                .sort((a, b) => a.localeCompare(b))
                .map((key, index) => {
                    const meta = AMBASSADOR_META[index];
                    return {
                        id: index + 1,
                        name: meta?.name ?? `Ambassador ${index + 1}`,
                        branch: meta?.branch ?? 'IEEE Student Branch',
                        image: photosContext(key),
                    };
                }),
        [photosContext]
    );

    const handleMouseDown = (event) => {
        const slider = sliderRef.current;
        if (!slider) {
            return;
        }

        dragRef.current.active = true;
        dragRef.current.startX = event.pageX;
        dragRef.current.startScroll = slider.scrollLeft;
        slider.classList.add('is-dragging');
    };

    const handleMouseMove = (event) => {
        const slider = sliderRef.current;
        if (!slider || !dragRef.current.active) {
            return;
        }

        event.preventDefault();
        const delta = event.pageX - dragRef.current.startX;
        slider.scrollLeft = dragRef.current.startScroll - delta * 1.1;
    };

    const stopDragging = () => {
        const slider = sliderRef.current;
        dragRef.current.active = false;
        if (slider) {
            slider.classList.remove('is-dragging');
        }
    };

    return (
        <section className="ambassadors" id="ambassadors">
            <div className="ambassadors__container">
                <div
                    className="ambassadors__header"
                    data-aos="fade-up"
                    data-aos-duration="650"
                    data-aos-anchor-placement="top-bottom"
                >
                    <h1 className="ambassadors__title">
                        MEET OUR AMBASSADORS
                    </h1>
                </div>


                <div
                    ref={sliderRef}
                    className="ambassadors__slider"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                >
                    {ambassadors.map((ambassador, index) => (
                        <article
                            key={ambassador.id}
                            className="ambassador-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 70}
                            data-aos-duration="650"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="ambassador-card__image-wrapper">
                                <img
                                    src={ambassador.image}
                                    alt={ambassador.name}
                                    className="ambassador-card__image"
                                />
                            </div>
                            <div className="ambassador-card__info">
                                <h3 className="ambassador-card__name">{ambassador.name}</h3>
                                <div className="ambassador-card__status">{ambassador.branch}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
