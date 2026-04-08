import React, { useEffect, useRef, useState } from 'react';
import './Reel.css';

import reelVideo from './0402.mp4';

export default function Reel() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [hasAutoStarted, setHasAutoStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || hasAutoStarted) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAutoStarted || !videoRef.current) return;

                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                    setHasAutoStarted(true);
                }).catch(() => {
                    // Some browsers block autoplay; manual play button remains available.
                });
            },
            { threshold: 0.55 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [hasAutoStarted]);

    const handlePlayToggle = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
            return;
        }

        videoRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(err => {
            console.log('Video playback blocked:', err);
        });
    };

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
            <div className="reel__side-title reel__side-title--left">
                Check Out
            </div>
            <div className="reel__side-title reel__side-title--right">
                Our Reel!
            </div>

            <div className="reel__inner">
                <video
                    ref={videoRef}
                    className="reel__video"
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                >
                    <source src={reelVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                <div className="reel__controls">
                    <button className="reel__play-btn" onClick={handlePlayToggle} title={isPlaying ? 'Pause' : 'Play'}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
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