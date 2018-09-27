import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const ModalMain = styled.div`
  background: lightgray;
  position: fixed;
  top: 190px;
  left: 25%;
  width: 50%;
  height: auto;
  padding: 35px 5%;
  text-align: center;
  box-shadow: 0px 3px 15px 4px rgb(44, 44, 44);

  h5 {
    font-size: 1.7rem;
    padding: 5px 0;
  }
`;

export const Button = styled.button`
  width: 45%;
  margin: 30px 2%;
  padding: 13px 2%;
  color: white;
  font-weight: bold;
  border: 1px solid #b8cacb;
  cursor: pointer;
  outline: none;

  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 5px 0px grey;
  }
  
`;

export const DeleteButton = styled(Button)`
  background: #ca001a;

  &:active {
    box-shadow: inset 0 0 19px 5px rgb(160, 0, 23);
  }
`;

export const NoButton = styled(Button)`
  background: #24b8bd;

  &:active {
    box-shadow: inset 0 0 31px 5px cadetblue;
  }
`;
