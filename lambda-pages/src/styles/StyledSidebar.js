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
    width: 100%;
    height: auto;
    min-height: auto;
    z-index: 1200;
    align-items: center;
    flex-direction: row;
    input {
      padding: 0.5rem;
      order: 2;
      /* margin-bottom: 1rem; */
    }

    button {
      font-size: 1.6rem;
      padding: 0.5rem;
      width: auto;
      background: transparent;
      color: #00a8ff;
      margin-left: 1rem;
      margin-bottom: 1rem;

      &:last-child {
        margin-top: 0;
      }
    }

    @media (max-width: 600px) {
      button {
        font-size: 1.4rem;
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
    @media (max-width: 800px) {
      font-size: 4.2rem;
      margin-right: auto;
      margin-bottom: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 2.6rem;
    }
    span {
      display: block;
      @media (max-width: 800px) {
        display: inline;
      }
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
