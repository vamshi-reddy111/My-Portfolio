import styled from "styled-components";

export const Container = styled.section`
  margin-top: 9rem;
  padding: 8rem 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  h2 {
    display: inline-block;
    margin: 0 0 2rem;
    font-size: clamp(3.2rem, 5vw, 5.6rem);
    letter-spacing: -0.04em;
    color: var(--lavender);
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1.4rem;
    color: var(--violet);
    font-size: 2rem;
  }

  h4 { margin: 0 0 1.2rem; }

  p {
    max-width: 72rem;
    font-size: clamp(1.6rem, 1.5vw, 1.8rem);
    color: var(--muted);
    line-height: 1.75;
    margin: 0;
  }

  .skill-groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 1.8rem;
    max-width: 82rem;
  }

  .skill-group {
    padding: 1.6rem;
    border: 1px solid var(--line);
    border-radius: .8rem;
    background: linear-gradient(145deg, rgba(23, 20, 33, .85), rgba(18, 16, 27, .7));
    transition: border-color .2s, transform .2s;
    &:hover { border-color: var(--line-strong); transform: translateY(-2px); }
    h4 {
      color: var(--off-white);
      font-family: var(--font-mono);
      font-size: 1.15rem;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
  }

  .hard-skills {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .7rem;
  }

  .skill {
    display: inline-block;
    padding: .55rem .8rem;
    border: 1px solid var(--line);
    border-radius: .35rem;
    font-family: var(--font-mono);
    font-size: 1.05rem;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: var(--muted);
    background: rgba(154, 108, 255, 0.05);
    transition: border-color .2s, color .2s, background .2s;
    &:hover { border-color: var(--lavender); color: var(--off-white); background: rgba(139, 92, 246, .12); }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    .skill-groups { margin-right: auto; margin-left: auto; }
    .hard-skills { justify-content: center; }
  }

  @media (max-width: 560px) {
    .skill-groups { grid-template-columns: 1fr; }
  }
`;
