import styled from "styled-components";


export const Container = styled.div`
  margin-top: 0;
  display: block;
  h2{
    text-align: left;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: stretch;
    gap: 1.4rem;
    width: 100%;
    input, textarea{
      width: 100%;
      padding: 1.2rem 1.4rem;
      border-radius: .8rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid var(--line-strong);
      color: var(--off-white);
      font-weight: 400;
      font-size: 1.6rem;
      background: rgba(17, 16, 20, .8);
      &::placeholder{
        color: var(--muted);
      }
    }

    textarea{
      height: 16rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      align-self: flex-start;
      padding: 1.1rem 2.2rem;
      border: 0;
      border-radius: .8rem;
      color: var(--black);
      background: var(--off-white);
      font-size: 1.6rem;
      transition: background .2s, color .2s;
      &:hover:not(:disabled) { color: var(--off-white); background: var(--violet); }
      &:disabled { cursor: not-allowed; opacity: .55; }
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`