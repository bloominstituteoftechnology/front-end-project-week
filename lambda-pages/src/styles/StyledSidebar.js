import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: #dcdde1;
  width: 25%;
  min-height: 100vh;
  height: 100%;
  padding: 2rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  button:last-child {
    margin-top: auto;
  }

  @media (max-width: 800px) {
    width: 35%;

    input {
      padding: 0.5rem;
    }

    button {
      width: auto;
      margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
      button {
        font-size: 1.8rem;
      }
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 0.8;
    margin-bottom: 2.5rem;
    @media (max-width: 940px) {
      font-size: 4.2rem;
    }
    @media (max-width: 600px) {
      font-size: 3rem;
    }

    span {
      display: block;
    }
  }

  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: inherit;
  }
`;

export default StyledSidebar;

// L
