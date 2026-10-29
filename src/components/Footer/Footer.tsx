import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

export function Footer() {
  return (
    <Container className="footer">
      <a href="#home" className="logo"><span>Injam Vamshi Reddy</span></a>
      <div>
        <p>Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" /></p>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/injam-vamshi-reddy-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/vamshi-reddy111" target="_blank" rel="noreferrer" aria-label="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/vamshireddy42/" target="_blank" rel="noreferrer" aria-label="LeetCode">
          <span>LC</span>
        </a>
      </div>
    </Container>
  );
}
