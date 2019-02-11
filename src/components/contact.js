import React, { Component } from "react";

class Contact extends Component {
  componentDidMount() {
    document.querySelector(".mdl-layout__content").style.backgroundImage =
      "none";
    document.querySelector(".mdl-layout__content").style.background =
      "linear-gradient(to top, #fcb045, #fd1d1d, #833ab4)";
  }
  render() {
    return (
      <div className="contact-page">
        <h1>Contact Page</h1>
        <div class="container contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3>Drop Us a Message</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnContact"
                    value="Send Message"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="txtMsg"
                    class="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: 150 }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
