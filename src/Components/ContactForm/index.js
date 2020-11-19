import React from "react";
import Style from './style.css'
import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1t3x7ee', 'template_7jwfor6', e.target, 'user_VfoIvnHsugNcuGtAOmHON')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="jumbotron contact-form FormStyle" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" /> 
        <div>
            <h1 className="display-4">Lets Connect!</h1>
        </div>
      <div className="row form-group">
      <label for="exampleInputEmail1">Name</label>
      <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="row form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="row form-group">
      <label for="exampleFormControlTextarea1">Message</label>
    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" value="send" className="btn text-light">Submit</button>
    </form>
  );
}