import React from "react";
import Style from './style.css'

function ContactForm() {
  return(
    <div className="jumbotron Style">
        <div>
            <h1 className="display-4">Lets Connect!</h1>
        </div>
      <div className="row form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="row form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="row form-group">
      <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className="btn text-light">Submit</button>
    </div>
  );
}

export default ContactForm;
