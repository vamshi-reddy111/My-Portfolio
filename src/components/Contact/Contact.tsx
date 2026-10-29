import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Let's Connect</h2>
        <p>Have an opportunity, project idea, or just want to connect? Feel free to reach out.</p>
      </header>
      <div className="contacts">
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
          <a href="https://www.linkedin.com/in/injam-vamshi-reddy-" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </Container>
  );
}
