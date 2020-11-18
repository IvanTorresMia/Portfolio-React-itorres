import React from "react";
import Style from "./style.css";

function StoryCard() {
  return (
    <div className="jumbotron Style">
      <div className="row">
        <div className="col">
          <h1 className="display-4">My Story</h1>
          <p className="lead"> write stuff here</p>
        </div>
        <div className="col imgCon">
          <img
            className="rounded imgStyle"
            alt="Ivan"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/22181648_1548939148462741_7723943774445130058_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=pfTS4TaAoKcAX-eG_Nm&_nc_ht=scontent-dfw5-2.xx&oh=d05fe01bcea7666e3d8f18d368a884d6&oe=5FD989F0"
          />
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
