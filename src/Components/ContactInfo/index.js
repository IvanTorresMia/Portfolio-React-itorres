import React from "react";
import Style from "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function ContactInfo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" id="card" data-aos="flip-left">
          <a
            href="https://github.com/IvanTorresMia"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/github-logo-black.jpg"}
              alt="GitHub Icon"
            />
          </a>
          <p className="lead">GitHub</p>
        </div>
        <div className="col" id="card" data-aos="flip-left">
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
          <p className="lead">Linked in</p>
        </div>
        <div className="col" id="card" data-aos="flip-right">
          <a
            href="https://www.facebook.com/ivan.torres.980"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/facebook.jpg"}
              alt="CV Icon"
            />
          </a>
          <p className="lead">Facebook</p>
        </div>
        <div className="col" id="card" data-aos="flip-right">
          <a
            href="https://www.instagram.com/torres.ar.ivan/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/instagram.jpg"}
              alt="CV Icon"
            />
          </a>
          <p className="lead">Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
