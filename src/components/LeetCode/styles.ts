import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 8rem 0;
  border-top: 1px solid var(--line);

  .leetcode-card {
    max-width: 72rem;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 2.4rem 1.8rem;
    border: 1px solid var(--line-strong);
    border-radius: 1.2rem;
    background: rgba(17, 14, 22, 0.72);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  }

  .leetcode-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.6rem;
  }

  .leetcode-brand {
    font-size: clamp(2.2rem, 3vw, 3.2rem);
    font-weight: 700;
    letter-spacing: -0.05em;
    color: var(--off-white);
  }

  .leetcode-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .leetcode-main-stat {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    min-width: 0;
  }

  .leetcode-main-stat strong {
    font-size: clamp(4rem, 7vw, 7.2rem);
    line-height: 0.9;
    letter-spacing: -0.08em;
    color: var(--off-white);
    font-weight: 700;
  }

  .leetcode-main-stat span {
    color: var(--muted);
    font-size: 1.6rem;
    letter-spacing: 0.02em;
  }

  .leetcode-side-stat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--muted);
    margin-left: auto;
  }

  .leetcode-stat-block {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    line-height: 1.2;
  }

  .stat-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--off-white);
  }

  .stat-label {
    font-size: 1.2rem;
    color: var(--muted);
    letter-spacing: 0.06rem;
    text-transform: uppercase;
  }

  .leetcode-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--line-strong);
    background: rgba(154, 108, 255, 0.08);
    color: var(--off-white);
    font-size: 2.2rem;
    line-height: 1;
    transition: transform 0.25s, border-color 0.25s;
    &:hover { transform: translateX(4px); border-color: var(--lavender); }
  }

  .status-message, .error-message {
    margin-top: 1.6rem;
    color: var(--muted);
  }

  .error-message {
    color: #ffb3b3;
  }

  .leetcode-meta {
    margin-top: 1.2rem;
    font-size: 1.2rem;
    color: var(--muted);
  }

  @media (max-width: 600px) {
    margin-top: 10rem;
    .leetcode-card {
      padding: 1.6rem 1.6rem 1.4rem;
    }
    .leetcode-content {
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .leetcode-side-stat {
      width: 100%;
      margin-left: 0;
      flex-direction: row;
      justify-content: space-between;
    }
    .leetcode-arrow {
      margin-left: auto;
    }
  }
`;
