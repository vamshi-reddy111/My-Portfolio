import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding-top: 15rem;
  padding-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  position: relative;
  isolation: isolate;
  &:before {
    content: "";
    position: absolute;
    width: 65vw;
    height: 65vw;
    max-width: 90rem;
    max-height: 90rem;
    top: 4rem;
    right: -25rem;
    background: radial-gradient(circle, rgba(132, 76, 255, 0.24), transparent 68%);
    filter: blur(1rem);
    z-index: -1;
    animation: breathe 8s ease-in-out infinite;
  }
  .hero-text{
    flex: 1 1 60%;
    min-width: 0;
    .eyebrow { color: var(--violet); font-size: 1.2rem; letter-spacing: 0.2rem; font-weight: 700; }
    .eyebrow span { color: var(--lavender); padding: 0 0.5rem; }
    h1{
      margin: 2rem 0 2.8rem;
      font-size: clamp(5.2rem, 9.5vw, 13rem);
      line-height: 0.86;
      letter-spacing: -0.07em;
      text-transform: uppercase;
      span, em { display: block; font-style: normal; }
      span { color: var(--off-white); }
      em { color: transparent; -webkit-text-stroke: 1px var(--lavender); }
    }
    .intro {
      max-width: 46rem;
      font-size: clamp(1.7rem, 2vw, 2.1rem);
      line-height: 1.55;
      color: var(--muted);
      border-top: 1px solid var(--line);
      padding-top: 2rem;
    }
  }
  .skill-line {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 1.5rem;
    margin: 2.2rem 0 3.5rem;
    color: var(--lavender);
    font-size: 1.1rem;
    letter-spacing: 0.12rem;
    font-weight: 700;
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.6rem 1rem;
      border: 1px solid rgba(199, 181, 255, 0.25);
      border-radius: 999px;
      background: rgba(154, 108, 255, 0.1);
      color: var(--lavender);
      box-shadow: inset 0 0 0 1px rgba(199, 181, 255, 0.06);
    }
    span:nth-child(3n) { background: rgba(132, 76, 255, 0.12); }
    span:nth-child(4n) { background: rgba(183, 121, 255, 0.12); }
    span:not(:last-child):after { content: ""; margin-left: 0; }
  }
  .hero-actions { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
  .button { margin: 0; padding: 1.3rem 2rem; border-radius: 0.3rem; }
  .primary-button { background: var(--violet); color: var(--off-white); }
  .primary-button span { margin-left: 1rem; }
  .secondary-button { border: 1px solid var(--line-strong); background: transparent; color: var(--off-white); }
  .secondary-button:hover { border-color: var(--lavender); background: rgba(150, 117, 255, 0.1); }
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    gap: 1.4rem;
    margin-top: 4.5rem;

    img,span{
      font-size: 3rem;
      width: 2.2rem;
      opacity: 0.72;
      transition: opacity 0.25s, transform 0.25s;
    }
    a:hover img { opacity: 1; transform: translateY(-3px); }
  }
  .hero-image{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 34rem;
    .portrait-frame {
      position: relative;
      width: min(100%, 32rem);
      padding: 1.2rem;
      border: 1px solid var(--line);
      background: rgba(20, 17, 29, 0.72);
      box-shadow: 2rem 2rem 0 rgba(132, 76, 255, 0.08);
    }
    img{
      display: block;
      width: 100%;
      aspect-ratio: 0.82;
      object-fit: cover;
      object-position: center;
      filter: saturate(0.82) contrast(1.04);
    }
    .portrait-label {
      display: block;
      color: var(--lavender);
      font-size: 1rem;
      letter-spacing: 0.15rem;
      padding: 0.7rem 0.2rem 0.2rem;
    }
    .portrait-frame:after {
      content: "";
      position: absolute;
      inset: -0.6rem -0.6rem auto auto;
      width: 4rem;
      height: 4rem;
      border-top: 1px solid var(--violet);
      border-right: 1px solid var(--violet);
    }
  }
  @media(max-width: 960px){
    align-items: flex-start;
    flex-direction: column;
    padding-top: 13rem;
    .hero-text{

      h1{
        font-size: clamp(5.2rem, 12vw, 9rem);
      }
    }
    .hero-image{
      margin-top: 5rem;
      align-self: flex-end;
    }
  }
  @media(max-width: 600px){
    min-height: auto;
    padding-top: 11rem;
    padding-bottom: 7rem;
    .hero-text h1 { font-size: clamp(4.5rem, 17vw, 7rem); }
    .hero-actions { align-items: stretch; flex-direction: column; }
    .hero-actions .button { text-align: center; }
    .hero-image{
      align-self: center;
      margin-top: 4rem;
      width: 100%;
      justify-content: center;
    }
  }
`;