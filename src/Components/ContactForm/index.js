import React from "react";
import "./style.css";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1t3x7ee",
        "template_7jwfor6",
        e.target,
        "user_VfoIvnHsugNcuGtAOmHON"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="jumbotron contact-form FormStyle" onSubmit={sendEmail} data-aos="fade-up">
      <input type="hidden" name="contact_number" />
      <div>
        <h1 className="display-4">Lets Connect!</h1>
        <div className="row">
          <div className="col">
            <img
              class="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/email-black-3.png"}
              alt="CV Icon"
            />
            <p className="lead">ivantorresmia27@gmail.com</p>
          </div>
          <div className="col">
            <img
              class="img-thumbnail m-2"
              src={process.env.PUBLIC_URL + "/phone.jpg"}
              alt="CV Icon"
            />
            <p className="lead">815-603-3297</p>
          </div>
        </div>
      </div>
      <div className="row form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          name="name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="row form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="row form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea
          name="message"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" value="send" className="btn text-light">
        Submit
      </button>
    </form>
  );
}
