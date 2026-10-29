import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #08070D;
    --charcoal: #0D0B14;
    --surface: #12101B;
    --elevated: #171421;
    --pink: #A78BFA;
    --green: #A78BFA;
    --blue: #A78BFA;
    --violet: #8B5CF6;
    --lavender: #C4B5FD;
    --off-white: #F5F3FA;
    --muted: #B5AEC5;
    --muted-subtle: #898198;
    --line: rgba(167, 139, 250, 0.20);
    --line-strong: rgba(167, 139, 250, 0.42);
    --glow: rgba(139, 92, 246, 0.12);
    --font-heading: 'Space Grotesk', Arial, sans-serif;
    --font-body: 'Inter', Arial, sans-serif;
    --font-mono: 'Space Mono', Consolas, monospace;
    scroll-behavior: smooth;
    scroll-padding-top: 9rem;
  }

  html.light {
    --black: #f5f2fb;
    --charcoal: #ebe5f4;
    --surface: #ffffff;
    --lavender: #5d3fa3;
    --off-white: #17121f;
    --muted: #5f566b;
    --line: rgba(93, 63, 163, 0.2);
    --line-strong: rgba(93, 63, 163, 0.45);
  }

  * { box-sizing: border-box; }
  html { font-size: 62.5%; }
  body {
    margin: 0;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: var(--black);
    color: var(--off-white);
    overflow-x: hidden;
  }
  body, input, textarea, button { font-family: var(--font-body); }
  h1, h2, h3, h4 { font-family: var(--font-heading); line-height: 1.08; }
  p { line-height: 1.65; }
  .eyebrow, .skill-line, .tech-list, .portrait-label, .portrait-caption, time { font-family: var(--font-mono); }
  body:before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 75% 15%, var(--glow), transparent 32rem);
    z-index: -2;
  }
  ul, li { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: none; }
  button, .button { cursor: pointer; }
  .logo { color: var(--off-white); }
  :focus-visible { outline: 2px solid var(--lavender); outline-offset: 4px; }

  .cursor-dot, .cursor-ring {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 2000;
    border-radius: 50%;
    transform: translate3d(-100px, -100px, 0);
  }
  .cursor-dot { width: 0.7rem; height: 0.7rem; margin: -0.35rem; background: var(--off-white); box-shadow: 0 0 1.2rem var(--violet); }
  .cursor-ring { width: 3.2rem; height: 3.2rem; margin: -1.6rem; border: 1px solid var(--lavender); transition: width 0.25s, height 0.25s, margin 0.25s, border-color 0.25s; }
  body.cursor-hover .cursor-ring { width: 4.8rem; height: 4.8rem; margin: -2.4rem; border-color: var(--violet); }

  @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.75; } 50% { transform: scale(1.1); opacity: 1; } }
  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    .cursor-dot, .cursor-ring { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *:before, *:after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
  }
`;
