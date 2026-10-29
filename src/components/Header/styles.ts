import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem 10rem;
  background: rgba(11, 9, 16, 0.72);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      color: var(--muted);
      padding: 0.6rem 0;
      font-weight: 500;
      font-size: 1.2rem;
      letter-spacing: 0.08rem;
      text-transform: uppercase;
      transition: color 0.25s;
      &:hover { color: var(--off-white); }
      &.button {
        padding: 0.9rem 1.5rem;
        color: var(--off-white);
        border: 1px solid var(--line-strong);
        background: transparent;
        border-radius: 0.2rem;
      }
    }
  }

  .logo { font-size: 2.2rem; letter-spacing: -0.06em; }
  .menu {
    width: 2rem;
    height: 0.2rem;
    background: var(--off-white);
    position: relative;
    cursor: pointer;
    display: none;
    &:before, &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: var(--off-white);
      transition: 0.35s;
    }
    &:before { bottom: 0.5rem; }
    &:after { top: 0.5rem; }
    &.active { background: transparent; }
    &.active:before { bottom: 0; transform: rotate(45deg); }
    &.active:after { top: 0; transform: rotate(135deg); }
  }

  input[type=checkbox] { height: 0; width: 0; visibility: hidden; }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 4.4rem;
    height: 2.4rem;
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 1rem;
  }
  label:after {
    content: "";
    background: var(--lavender);
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    transition: 0.3s;
  }
  input:checked + label { background: var(--violet); }
  input:checked + label:after { left: calc(100% - 0.3rem); transform: translateX(-100%); }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;
    .menu { display: block; }
    nav {
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--black);
      top: 0;
      left: 0;
      transition: opacity 0.25s, visibility 0.25s;
      a { font-size: 1.5rem; }
      &.active { opacity: 1; visibility: visible; }
    }
  }
`;
