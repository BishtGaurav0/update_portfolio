import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import { displayNoti } from "../../notification";
import { Fade, Bounce } from "react-reveal";
import { ContactContainerWrapper } from "./ContactStyled";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          displayNoti("Message Sent Successfully", "success", 2000);
          console.log(result.text);
        },
        (error) => {
          displayNoti("Something Went Wrong", "error", 2000);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactContainerWrapper>
      <div id="contact">
        <Bounce>
          <h1> GET IN TOUCH </h1>
        </Bounce>

        <div id="contact_section">
          <Fade>
            <div id="google-map">
              <iframe
                title="Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129412968!2d77.06889969035102!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1644826171008!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </Fade>

          <div id="contact-me">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <div className="textarea">
                <textarea
                  name="message"
                  placeholder="Type Your Message Here..."
                  required
                />
              </div>

              <div id="send-message">
                <Button type="submit"> Send Message </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactContainerWrapper>
  );
};

export default Contact;
