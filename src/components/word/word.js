import React from 'react';
import './word.css';
import videoFile from './TomorrowLand-3-0.mp4';

export default function Word() {
  return (
    <section className="word" id="word">
      <div className="word__shell">
        <div className="word__header" data-aos="fade-up">
          <p className="word__eyebrow">Special Message</p>
          <h2 className="word__title">A Special Message from the President of the IEEE Computer Society</h2>
        </div>
        
        <div className="word__video-container" data-aos="fade-up" data-aos-delay="80">
          <video 
            className="word__video" 
            controls 
            src={videoFile}
            poster=""
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
