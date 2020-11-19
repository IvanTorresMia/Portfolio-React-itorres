import React from "react";
import Style from "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function AboutMeCards() {
  return (
    <div className="jumbotron SkillStyle" data-aos="flip-right">
      <div className="row">
        <div className="col imgCon">
          <img
            className="rounded imgStyle"
            alt="Ivan"
            src="https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
          />
        </div>
        <div className="col">
          <h1 className="display-4">Skills</h1>
          <div className="row">
            <p className="lead col">
              HTML5
              <br />
              Cascading Style Sheets (CSS)
              <br />
              Node.js
              <br />
              AJAX
              <br />
              MySQL
              <br />
              Sequelize.js
              <br />
              React.js
            </p>
            <p className="lead col">
              node.js
              <br />
              jQuery UI
              <br />
              JSON
              <br />
              HTML
              <br />
              css
              <br />
              Bootstrap
              <br />
              MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCards;

