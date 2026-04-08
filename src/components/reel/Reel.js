import React, { useEffect, useRef, useState } from 'react';
import './Reel.css';

import reelVideo from './0402.mp4';

export default function Reel() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

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
        <section className="reel" id="reel">
            <div className="reel__side-title reel__side-title--left" data-aos="fade-right" data-aos-delay="40">
                Check Out
            </div>
            <div className="reel__side-title reel__side-title--right" data-aos="fade-left" data-aos-delay="80">
                Our Reel!
            </div>

            <div className="reel__inner" data-aos="fade-up" data-aos-delay="80">
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
                
                <div className="reel__controls" data-aos="fade-up" data-aos-delay="180">
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