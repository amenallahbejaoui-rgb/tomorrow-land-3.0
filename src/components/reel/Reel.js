import React, { useEffect, useRef, useState } from 'react';
import './Reel.css';

import reelVideo from './0402.mp4';

export default function Reel() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '300px 0px',
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (videoRef.current && shouldLoadVideo) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
            videoRef.current.play().catch(err => {
                console.log('Video autoplay blocked:', err);
            });
        }
    }, [shouldLoadVideo, volume, isMuted]);

    const handleVolumeToggle = () => {
        if (videoRef.current) {
            const newMuted = !isMuted;
            setIsMuted(newMuted);
            videoRef.current.muted = newMuted;
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            if (newVolume > 0 && isMuted) {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    return (
        <section className="reel" id="reel" ref={sectionRef}>
            <div className="reel__side-title reel__side-title--left" data-aos="fade-right" data-aos-delay="40">
                Check Out
            </div>
            <div className="reel__side-title reel__side-title--right" data-aos="fade-left" data-aos-delay="80">
                Our Reel!
            </div>

            <div className="reel__inner" data-aos="fade-up" data-aos-delay="80">
                {!isVideoReady && (
                    <div className="reel__placeholder" aria-hidden="true">
                        <span className="reel__placeholder-label">Loading reel</span>
                        <span className="reel__placeholder-subtitle">Video starts when you reach this section</span>
                    </div>
                )}

                {shouldLoadVideo && (
                    <video
                        ref={videoRef}
                        className={`reel__video ${isVideoReady ? 'reel__video--ready' : ''}`}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        preload="none"
                        onCanPlay={() => setIsVideoReady(true)}
                    >
                        <source src={reelVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                
                <div className="reel__controls" data-aos="fade-up" data-aos-delay="180">
                    <button className="reel__mute-btn" onClick={handleVolumeToggle} title={isMuted ? 'Unmute' : 'Mute'}>
                        {isMuted ? '🔇' : '🔊'}
                    </button>
                    <input 
                        type="range" 
                        className="reel__volume-slider" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        title="Volume"
                    />
                </div>

                
            </div>
        </section>
    );
}