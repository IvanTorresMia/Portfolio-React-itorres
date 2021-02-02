import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Hero() {
  return (
    <div className=" jumbotron style">
      <div className="row" data-aos="fade-left">
        <div className="col">
          <h1 className="display-4">Developer</h1>
          <p className="lead">Let's change the world through Tech</p>
          <hr />
          <p>
            With creatvity, intelligence, and a drive to leave a dent on the
            world. I am a aspiring Full Stack Developer who loves to learn, and
            is excited to work with a team. Here you will find some of my work
            as well as links to my Social Media.
          </p>
          <Link to="/AboutMe">
            <button className="btn text-light">About Me</button>
          </Link>
          <Link to='/Contact'>
          <button className="btn text-light">Let's Connect</button>
          </Link>
          <br />
          <div className="social">
            <a href="https://github.com/IvanTorresMia" target="_blank" rel="noreferrer">
              <img
                className="img-thumbnail m-2"
                src={process.env.PUBLIC_URL + "/github-logo-black.jpg"}
                alt="GitHub Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-torres-0828931b2/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-thumbnail m-2"
                src={process.env.PUBLIC_URL + "/linkedIn.png"}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1MpKmhQKr5Xzc7NC5V6Si3RGbbVlSQLlvVrLEiBz-pKs/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                class="img-thumbnail m-2"
                src={process.env.PUBLIC_URL + "/cv.png"}
                alt="CV Icon"
              />
            </a>
          </div>
        </div>
        <div className="col imgCon">
          <img
            className="rounded imgStyle"
            alt="Ivan"
            src={process.env.PUBLIC_URL + "/IvanPortfolio.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
