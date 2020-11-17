import React from 'react'
import Style from './style.css'
import { Link } from "react-router-dom";

function Hero() {

    return (
        <div className="jumbotron style">
            <div className="row">
                <div className="col">
            <h1 className="display-4">Developer</h1>
            <p className="lead">
                Let's change the world through Tech
            </p>
            <hr/>
            <p>
                With creatvity, intelligence, and a drive to leave a dent on the world. 
                I am a aspiring Full Stack Developer who loves to learn, and is excited to work with a team. 
                Here you will find some of my work as well as links to my Social Media.
            </p>
            <button className="btn text-light">
                About Me
            </button>
            <button className="btn text-light">
                Let's Connect
            </button>
            <br />
            <div className="social">
            <a href="https://github.com/IvanTorresMia" target="_blank">
                            <img className="img-thumbnail m-2" src={process.env.PUBLIC_URL + '/github-logo-black.jpg'} alt="GitHub Icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ivan-torres-0828931b2/" target="_blank">
                            <img className="img-thumbnail m-2" src={process.env.PUBLIC_URL + '/linkedIn.png'} alt="LinkedIn Icon"/>
                        </a>
                        <a href="https://docs.google.com/document/d/16c10yqmCmxzBsDn9xWfy5PDCh38xbu7IUXVdRni7O9A/edit?usp=sharing" target="_blank">
                            <img class="img-thumbnail m-2" src={process.env.PUBLIC_URL + '/cv.png'} alt="CV Icon"/>
                        </a>
                        </div>
            </div>
            <div className="col imgCon">
                <img className="rounded imgStyle" alt="Ivan" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54256718_2189722484384401_9191212666067091456_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=gXnQK_fDZC4AX-UOHBD&_nc_ht=scontent-dfw5-2.xx&oh=2da28025722ee2fe323b2a0731aa2ec6&oe=5FD9BB8E"/>
            </div>
            </div>
        </div>

    )
}

export default Hero;