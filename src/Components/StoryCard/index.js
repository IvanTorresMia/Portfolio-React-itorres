import React from "react";
import Style from "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function StoryCard() {
  return (
    <div className="jumbotron StoryStyle" data-aos="flip-left">
      <div className="row">
        <div className="col">
          <h1 className="display-4">My Story</h1>
          <p className="lead">
            Raised in the good ol' midwest at 23 I decided to make a life changing 
            decision and move to sunny california. Since then I have pursued my life as a musician and a developer.
            I have now finished three years of Bethel School of Ministry studying leadership here in northern california, 
            and now I am excited to be finishing up Berkely's Extencion Full Stack Bootcamp and go out and pursue my dreams as a 
            developer. I am passionate about learning, creativity, and I am a self motivated person. Thank you for checking out my 
            portfolio.
          </p>
        </div>
        <div className="col imgCon">
          <img
            className="rounded imgStyle"
            alt="Ivan"
            src={process.env.PUBLIC_URL + "/Ivans-drum.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
