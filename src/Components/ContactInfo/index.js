import React from "react";
import Style from "./style.css";

function ContactInfo() {
  return (
    <div className="container Style">
      <div className="row">
        <div className="col">
          <a href="https://github.com/IvanTorresMia" target="_blank">
            <img
              className="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/github-logo-black.jpg"}
              alt="GitHub Icon"
            />
          </a>
          <p className="lead">GitHub</p>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/ivan-torres-0828931b2/"
            target="_blank"
          >
            <img
              className="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/linkedIn.png"}
              alt="LinkedIn Icon"
            />
          </a>
          <p className="lead">Linked in</p>
        </div>
        <div className="col">
          <a
            href="https://www.facebook.com/ivan.torres.980"
            target="_blank"
          >
            <img
              class="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/facebook.jpg"}
              alt="CV Icon"
            />
          </a>
          <p className="lead">Facebook</p>
        </div>
        <div className="col">
          <a
            href="https://www.instagram.com/torres.ar.ivan/"
            target="_blank"
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

{
  /* <div className="social">
<a href="https://github.com/IvanTorresMia" target="_blank">
  <img
    className="img-thumbnail m-2"
    src={process.env.PUBLIC_URL + "/github-logo-black.jpg"}
    alt="GitHub Icon"
  />
</a>
<a
  href="https://www.linkedin.com/in/ivan-torres-0828931b2/"
  target="_blank"
>
  <img
    className="img-thumbnail m-2"
    src={process.env.PUBLIC_URL + "/linkedIn.png"}
    alt="LinkedIn Icon"
  />
</a>
<a
  href="https://docs.google.com/document/d/16c10yqmCmxzBsDn9xWfy5PDCh38xbu7IUXVdRni7O9A/edit?usp=sharing"
  target="_blank"
>
  <img
    class="img-thumbnail m-2"
    src={process.env.PUBLIC_URL + "/cv.png"}
    alt="CV Icon"
  />
</a>
</div> */
}
