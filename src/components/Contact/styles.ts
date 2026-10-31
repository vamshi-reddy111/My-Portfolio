import styled from "styled-components";


export const Container = styled.section`
  margin-top: 8rem;
  padding: 8rem 0;
  border-top: 1px solid var(--line);

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: clamp(3.2rem, 5vw, 5.6rem);
      letter-spacing: -0.05em;
    }
    p{
      color: var(--muted);
      font-weight: 500;
    }
  }

  .contact-content { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(4rem, 8vw, 10rem); margin-top: 4.5rem; padding: 6rem clamp(2rem, 8vw, 10rem); border: 1px solid var(--line-strong); border-radius: 1rem; background: rgba(0, 0, 0, .2); }
  .contact-details { align-self: center; }
  .contact-details h3 { margin: 0; color: var(--off-white); font-size: clamp(2.8rem, 4vw, 4.4rem); font-weight: 400; letter-spacing: -.05em; }
  .contact-details > p { margin: 3rem 0; color: var(--off-white); font-size: 1.8rem; font-weight: 500; }
  .contact-links { display: grid; gap: 1.7rem; }
  .contact-links div { display: flex; align-items: center; gap: 1.2rem; }
  .contact-links img { width: 2rem; height: 2rem; object-fit: contain; }
  .contact-links .email-icon { filter: invert(78%) sepia(19%) saturate(1000%) hue-rotate(210deg); }
  .contact-links .phone-icon { filter: invert(78%) sepia(19%) saturate(1000%) hue-rotate(210deg); }
  .contact-links a { color: var(--off-white); font-weight: 600; }
  .contact-links a:hover { color: var(--lavender); }
  @media(max-width: 900px) { .contact-content { grid-template-columns: 1fr; gap: 4rem; padding: 4rem 2.5rem; } }
  @media(max-width: 600px) { .contact-content { margin-top: 3rem; padding: 3rem 1.6rem; } }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
