import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 5px auto;
  -webkit-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
`;

export const SideBar = styled.div`
  width: 25%;
  min-height: 95vh;
  background-color: silver;
  padding: 15px;
  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

export const Button = styled.div`
  width: 95%;
  height: 50px;
  margin: 20px auto 15px;
  background-color: darkcyan;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 1rem;
`;

export const DisplayDiv = styled.div`
  width: 75%;
  background-color: whitesmoke;
`;

export const SignupForm = styled.div`
   {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.8rem;
    padding: 70px 25px 35px;
    margin: auto;
  }

  .error-message {
      color: red;
      margin: auto;
      font-size: 1.1rem;
      padding-bottom: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    margin: auto;
  }

  input {
    margin-bottom: 20px;
    width: 80%;
    height: 43px;
    padding: 10px;
    font-size: 1.2rem;
  }

  button {
    width: 90%;
    margin: 20px 0px;
    height: 35px
    font-size: 1.2rem;
    background-color: darkcyan;
    color: white;
    cursor: pointer;
    border-radius: 1rem;
  }
`;
