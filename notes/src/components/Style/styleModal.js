import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000;
  z-index: 10;
`;

export const MainModal = styled.div`
  position: fixed;
  top: 190px;
  left: 25%;
  width: 50%;
  height: auto;
  padding: 35px 5%;
  text-align: center;
  background: lightgray;
  box-shadow: 0px 3px 15px 4px #2c2c2c;

  h5 {
    font-size: 30px;
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

  &:hover {
    box-shadow: 0px 2px 5px 0px gray;
  }
`;

export const Delete = styled(Button)`
  background: #ca001a;

  &:active {
    box-shadow: inset 0 0 19px 5px #a00017;
  }
`;

export const No = styled(Button)`
  background: #24b8bd;

  &:active {
    box-shadow: inset 0 0 31px 5px cadetblue;
  }
`;
