import { Container } from './styles';
import { useState } from 'react';

export function Header() {
  const [isActive, setActive] = useState(false);
  function closeMenu() { setActive(false); }

  return (
    <Container className="header-fixed">
        <a href="#home" className="logo">
          <span>Injam Vamshi Reddy</span>
        </a>
        <nav className={isActive ? 'active' : ''}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#project" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="/Injam_Vamshi_Reddy_Resume_.pdf" download className="button">Resume</a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        />
    </Container>
  );
}
