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

  .contacts{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc((100% - 4rem) / 3);
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--surface);
      border: 1px solid var(--line);
      border-radius: 0.3rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      .email-icon{
        filter: invert(36%) sepia(93%) saturate(2500%) hue-rotate(337deg) brightness(95%) contrast(95%);
      }
      .phone-icon{
        filter: invert(47%) sepia(67%) saturate(750%) hue-rotate(91deg) brightness(93%) contrast(88%);
      }
      a{
        color: var(--off-white);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--violet);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
      }
    }
  }
  
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
