import React from "react";
// import {FiPlayCircle} from 'react-icons/fi';
import { Button } from "./../Button/Button";
import "./HeroSection.css";
import "./../../App.css";
import "./HeroSection.css";
import BackVideo from "./../../../public/videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video  src={BackVideo} muted={true} autoPlay={true} loop={true}/> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          WATCH TRAILER
          {/* <FiPlayCircle className='fi-play-circle'/> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
