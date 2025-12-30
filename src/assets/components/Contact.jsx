import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section className="container contact-bg">
      <div
        className="d-flex row align-items-center container"
        id="container-wrap"
      >

        {/* Left tab */}

        <div className="col-7 container" id="contact-lt">
          <form action="">
            <div className="contact-lt-text mb-4">
              <h1 style={{ fontSize: 60, fontWeight: 700 }}>Get in Touch</h1>
            </div>
            <div className="row  mb-4">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="contact-input-name" id="name" placeholder="Name"/>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="contact-input-phone" id="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="mail">Email</label>
              <input type="email" className="contact-input-mail" id="mail" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message</label>
              <input type="text" className="contact-input-msg" id="message"  />
            </div>
            <button className="contact-button">Submit Now</button>
          </form>
        </div>

        {/* Right Tab  */}

        <div className="col-5 container">
            <div className="container">

                <div className="container contact-rt">

                </div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
