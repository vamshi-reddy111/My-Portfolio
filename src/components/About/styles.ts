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
  }

  h4 { margin: 1rem 0; }

  p {
    max-width: 72rem;
    font-size: clamp(1.6rem, 1.5vw, 1.8rem);
    color: var(--muted);
    line-height: 1.75;
    margin: 0;
  }

  .hard-skills {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .skill {
    display: inline-block;
    padding: 0.8rem 1.2rem;
    border: 1px solid var(--line);
    border-radius: 0.2rem;
    font-family: var(--font-mono);
    font-size: 1.2rem;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: var(--muted);
    background: rgba(154, 108, 255, 0.05);
    transition: border-color 0.25s, color 0.25s, transform 0.25s;
    &:hover { border-color: var(--lavender); color: var(--off-white); transform: translateY(-2px); }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    .hard-skills { justify-content: center; }
  }
`;
