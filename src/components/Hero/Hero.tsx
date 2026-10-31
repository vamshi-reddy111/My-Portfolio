import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="eyebrow">CS UNDERGRADUATE <span>•</span> DEVELOPER</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1><span>INJAM VAMSHI</span><em>REDDY</em></h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <p className="intro">I build thoughtful digital experiences, solve hard problems, and explore the space where software meets intelligence.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <div className="skill-line"><span>JAVA</span><span>DSA</span><span>MACHINE LEARNING</span><span>AI</span><span>FULL STACK</span></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <div className="hero-actions">
            <a href="#project" className="button primary-button">View My Work <span>↗</span></a>
            <a href="https://leetcode.com/u/vamshireddy42/" target="_blank" rel="noreferrer" className="button secondary-button">View LeetCode</a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media">
            <a href="https://github.com/vamshi-reddy111" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/injam-vamshi-reddy-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <div className="portrait-frame">
            <img src="/Images/profile.png" alt="Injam Vamshi Reddy" />
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
