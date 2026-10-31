import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Let's Connect</h2>
        <p>Interested in connecting? Feel free to reach out.</p>
      </header>
      <div className="contact-content">
        <div className="contact-details">
          <h3>LET'S CONNECT</h3>
          <p>Fill in the form to start a conversation.</p>
          <div className="contact-links">
            <div>
              <a href="mailto:injamvamshi@gmail.com"><img className="email-icon" src={emailIcon} alt="Email" /></a>
              <a href="mailto:injamvamshi@gmail.com">injamvamshi@gmail.com</a>
            </div>
            <div>
              <a href="tel:+918074153917"><img className="phone-icon" src={phoneIcon} alt="Phone" /></a>
              <a href="tel:+918074153917">+91 8074153917</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/injam-vamshi-reddy-" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.linkedin.com/in/injam-vamshi-reddy-" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Container>
  );
}
