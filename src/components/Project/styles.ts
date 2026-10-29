import styled from "styled-components";

export const Container = styled.section`
  --project-accent: var(--lavender);
  --project-bg: var(--black);
  --project-panel: var(--surface);
  position: relative;
  margin-top: 8rem;
  padding: 10rem 0 12rem;
  border-top: 1px solid var(--line);
  color: #f7f7f7;
  background: var(--project-bg);
  font-family: var(--font-body);
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    width: min(58rem, 80%);
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--project-accent), transparent);
    content: "";
    transform: translateX(-50%);
  }
  .section-heading, .additional-heading { max-width: 118rem; margin-right: auto; margin-left: auto; text-align: center; }
  .section-heading > span, .additional-heading > span, h4, .visual-heading, .status, .category, .tags, .unavailable { font-family: var(--font-mono); }
  .section-heading > span, .additional-heading > span { color: var(--project-accent); font-size: 1.1rem; letter-spacing: .14em; }
  h2 { margin: 1rem 0; font-size: clamp(3.2rem, 5vw, 5.6rem); letter-spacing: -.05em; }
  .section-heading p { max-width: 62rem; margin: 0 auto 5rem; color: #aaa; }
  .featured-projects { display: grid; gap: 3rem; max-width: 118rem; margin: 0 auto; }
  .featured-project { position: relative; padding: clamp(2.2rem, 4vw, 4.8rem); border: 1px solid var(--line-strong); border-radius: 2rem; background: linear-gradient(135deg, var(--elevated) 0%, var(--project-panel) 70%); box-shadow: inset 0 1px rgba(255,255,255,.04), 0 1.5rem 5rem rgba(0,0,0,.25); transition: transform .3s, border-color .3s, box-shadow .3s; }
  .featured-project:after { position: absolute; top: 0; right: 12%; width: 18rem; height: 1px; background: var(--project-accent); content: ""; opacity: .7; }
  .featured-project:hover { transform: translateY(-4px); border-color: var(--project-accent); box-shadow: inset 0 1px rgba(255,255,255,.06), 0 1.5rem 5rem var(--glow); }
  .project-meta { display: flex; justify-content: space-between; gap: 1.5rem; align-items: center; margin-bottom: 2rem; }
  .category { color: var(--project-accent); font-size: 1.1rem; letter-spacing: .08em; }
  .status { padding: .6rem 1rem; border: 1px solid var(--line-strong); border-radius: 999px; color: var(--lavender); background: rgba(139, 92, 246, .12); font-size: 1rem; letter-spacing: .08em; white-space: nowrap; }
  .featured-project h3 { max-width: 92rem; margin: 0 0 1.5rem; font-size: clamp(2.4rem, 4vw, 4.4rem); line-height: 1.08; letter-spacing: -.04em; }
  .description { max-width: 82rem; margin: 0 0 3rem; color: var(--muted); line-height: 1.7; }
  .project-content { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(26rem, .85fr); gap: 2.4rem; align-items: stretch; }
  .architecture { padding: 2.4rem; border: 1px solid var(--line); border-radius: 1.2rem; background: linear-gradient(145deg, var(--surface), var(--black)); }
  h4 { margin: 0 0 1.5rem; color: var(--project-accent); font-size: 1.1rem; letter-spacing: .12em; }
  .secondary-heading { margin-top: 3rem; }
  .pipeline { display: flex; flex-wrap: wrap; align-items: center; gap: .7rem; }
  .pipeline-step { display: flex; align-items: center; gap: .7rem; }
  .pipeline-step span { padding: .9rem 1.1rem; border: 1px solid var(--line); border-radius: .5rem; color: var(--muted); background: rgba(139, 92, 246, .06); font-family: var(--font-mono); font-size: 1.15rem; }
  .pipeline-step b { color: var(--project-accent); font-size: 1.6rem; font-weight: 400; }
  .visual { display: flex; flex-direction: column; min-height: 28rem; padding: 2.4rem; border: 1px solid var(--line); border-radius: 1.2rem; background: radial-gradient(circle at 50% 40%, var(--glow), transparent 60%), var(--black); }
  .visual-heading { display: flex; justify-content: space-between; color: #ddd; font-size: 1.1rem; letter-spacing: .1em; }
  .visual-heading strong { color: var(--project-accent); font-weight: 400; }
  .heart-visual svg { width: 100%; height: 16rem; margin: 1rem 0; }
  .grid-line { stroke: #242424; stroke-width: .5; }
  .waveform { fill: none; stroke: url(#wave-gradient); stroke-width: 1.5; }
  .class-selector, .view-selector { display: flex; flex-wrap: wrap; gap: .7rem; }
  button { cursor: pointer; }
  .class-selector button, .view-selector button { padding: .7rem 1rem; border: 1px solid var(--line); border-radius: .3rem; background: transparent; color: var(--muted); font-family: var(--font-mono); font-size: 1.1rem; }
  .class-selector button.selected, .view-selector button.selected, .class-selector button:hover, .view-selector button:hover { border-color: var(--project-accent); color: var(--black); background: var(--project-accent); }
  .visual-note { margin: auto 0 0; padding-top: 1.5rem; color: var(--muted-subtle); font-size: 1.15rem; line-height: 1.5; }
  .lattice { width: 100%; height: 18rem; margin: 1rem 0; }
  .lattice path { fill: none; stroke: var(--violet); stroke-width: 1; }
  .lattice circle { fill: var(--project-accent); stroke: var(--lavender); stroke-width: 1; }
  .structure-text { min-height: 18rem; margin: 1rem 0; padding: 1.5rem; color: var(--lavender); background: var(--black); overflow: auto; font-size: 1.2rem; line-height: 1.8; }
  .project-bottom { display: flex; justify-content: space-between; align-items: center; gap: 2rem; margin-top: 2.8rem; padding-top: 2rem; border-top: 1px solid #272727; }
  .tags { display: flex; flex-wrap: wrap; gap: .8rem; }
  .tags span { padding: .6rem .9rem; border: 1px solid #3c3c3c; border-radius: .3rem; color: #aaa; font-size: 1.1rem; }
  .case-study-toggle, .repo-link { border: 0; color: var(--project-accent); background: transparent; font-family: var(--font-mono); font-size: 1.2rem; text-decoration: none; white-space: nowrap; }
  .case-study-toggle:focus-visible, .class-selector button:focus-visible, .view-selector button:focus-visible, .repo-link:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
  .case-study { margin-top: 2.5rem; padding: 2rem; border-top: 1px solid var(--line); color: var(--muted); line-height: 1.7; }
  .case-study p { margin: .8rem 0; }
  .case-study strong { color: #eee; }
  .additional-heading { margin: 9rem auto 2.5rem; }
  .additional-heading h3 { margin: .8rem 0 0; font-size: clamp(2.4rem, 4vw, 3.6rem); }
  .additional-projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 118rem; margin: 0 auto; }
  .additional-project { display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; padding: 2.4rem; border: 1px solid #333; border-radius: 1rem; background: var(--project-panel); transition: border-color .25s, transform .25s; }
  .additional-project:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .additional-project h4 { margin-bottom: 1rem; color: #f7f7f7; font-family: var(--font-heading); font-size: 2rem; letter-spacing: 0; }
  .additional-project p { color: #aaa; line-height: 1.6; }
  .additional-project .tags { margin-top: 1.5rem; }
  .repo-link { display: inline-flex; align-items: center; gap: .7rem; width: fit-content; }
  .repo-link img { width: 2rem; }
  .unavailable { color: #666; font-size: 1.1rem; }
  @media (max-width: 1100px) { .project-content { grid-template-columns: minmax(0, 1.2fr) minmax(24rem, .8fr); } }
  @media (max-width: 800px) { .project-content { grid-template-columns: 1fr; } .featured-project:after { right: 10%; width: 12rem; } }
  @media (max-width: 600px) { .project-meta, .project-bottom { align-items: flex-start; flex-direction: column; } .additional-projects { grid-template-columns: 1fr; } .pipeline-step b { display: none; } .pipeline-step { width: 100%; } .pipeline-step span { width: 100%; } .featured-project { border-radius: 1rem; } }
  @media (prefers-reduced-motion: reduce) { .featured-project { transition: none; } .featured-project:hover { transform: none; } }
`;
