import React from "react";
import "./abouttommorowland.css";
import tommorowlandImage from "./tommorowland.png";

/* Retro PC Monitor with Image Display */
function RetroPC() {
  return (
    <div className="retro-pc">
      {/* Monitor screen */}
      <div className="monitor-screen">
        {/* Screen bezel */}
        <div className="screen-bezel">
          <div className="screen-inner">
            {/* Image display area */}
            <img 
              src={tommorowlandImage} 
              alt="Tommorowland"
              className="screen-image"
            />
          </div>
          {/* Scanlines effect */}
          <div className="scanlines"></div>
          {/* Screen glare */}
          <div className="screen-glare"></div>
        </div>
      </div>

      {/* Monitor stand neck */}
      <div className="monitor-stand-neck"></div>

      {/* Monitor base */}
      <div className="monitor-base"></div>

      {/* Shadow */}
      <div className="monitor-shadow"></div>
    </div>
  );
}

const AboutTommorowland = () => {
  return (
    <section className="about-tommorowland-container" id="about-tommorowland-container">
      <div className="about-tommorowland-inner">
        <div className="left-side">
          <h2 className="about_title" data-aos="fade-right" data-aos-delay="0">
            About
            <br />
            Tomorrow land 
          </h2>
          <p className="about_body" data-aos="fade-up" data-aos-delay="80">
            Tomorrow Land is an innovation hub where tech meets creativity. Our
            mission is to bridge the gap between current skills and the digital
            future by exploring the gaming ecosystem from every angle. From
            technical workshops in Game Dev and UI/UX to high-stakes ideathons
            and junior competitions, we provide the platform for the next
            generation of creators to learn, build, and lead. We do not just
            talk about the future, we give you the tools to create it.
          </p>
        </div>

        <div className="right-side">
          <div className="image-section" data-aos="fade-left" data-aos-delay="120" data-aos-duration="700">
            <RetroPC />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTommorowland;