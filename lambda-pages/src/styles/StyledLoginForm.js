import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.7);
  padding: 2rem;
  width: 80%;
  margin: 0 auto;
  form {
    width: 100%;
  }

  input,
  h1 {
    width: 100%;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: 4.5rem;
    font-weight: 400;
    span {
      color: #00a8ff;
    }
  }

  .form-group {
    margin-bottom: 2rem;

    label {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }

    input {
      padding: 1rem;
      font-size: inherit;
      border-radius: 5px;
      border: 1px solid #dcdde1;
      &:focus {
        outline: 2px solid #00a8ff;
        border-radius: 5px;
      }
    }
  }

  .redirect-div {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    a {
      color: #00a8ff;
      &:focus {
        text-decoration: underline;
      }
    }
  }

  button {
    margin-top: 2rem;
  }
`;
