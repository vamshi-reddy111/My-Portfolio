import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 8rem 0;
  border-top: 1px solid var(--line);
  .section-heading { max-width: 62rem; margin: 0 auto 3rem; text-align: center; }
  .section-heading > span, .profile-bar, .topic-group h3 { font-family: var(--font-mono); }
  .section-heading > span { color: var(--lavender); font-size: 1rem; letter-spacing: .12em; }
  .section-heading h2 { margin: .8rem 0; color: var(--off-white); font-size: clamp(2.8rem, 4vw, 4.6rem); letter-spacing: -.05em; }
  .section-heading p { margin: 0; color: var(--muted); }
  .profile-bar { display: flex; justify-content: space-between; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 1.1rem; letter-spacing: .05em; }
  .profile-bar strong, .profile-bar a { color: var(--lavender); font-weight: 400; }
  .profile-bar a:hover { color: var(--off-white); }
  .topic-layout { margin-top: 1rem; }
  .topic-groups { padding: 1.8rem; border: 1px solid var(--line); border-radius: .7rem; background: var(--surface); }
  .topic-group + .topic-group { margin-top: 1.6rem; }
  .topic-group h3 { display: flex; align-items: center; gap: .7rem; margin: 0 0 1rem; color: var(--off-white); font-size: 1.15rem; letter-spacing: .08em; text-transform: uppercase; }
  .topic-group h3 i { width: .7rem; height: .7rem; border-radius: 50%; background: var(--lavender); }
  .topic-group h3 i[data-group="intermediate"] { background: #8b9cf6; }
  .topic-group h3 i[data-group="fundamental"] { background: #7c6bb5; }
  .topic-pills { display: flex; flex-wrap: wrap; gap: .6rem; }
  .topic-pills span { display: inline-flex; gap: .7rem; align-items: center; padding: .55rem .8rem; border: 1px solid var(--line); border-radius: 99rem; color: var(--muted); font-size: 1.05rem; }
  .topic-pills b { color: var(--muted-subtle); font-family: var(--font-mono); font-size: .9rem; font-weight: 400; }
  @media (max-width: 520px) {
    .profile-bar { align-items: flex-start; flex-direction: column; }
    .topic-groups { padding: 1.4rem; }
  }
`;
