import styled from "styled-components";

export const LeftBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #D3D2D3;
  border: 2px solid red;
  position: fixed;
  text-align: center;
`;

export const ContainCards = styled.div`
    width: 70%;
    border: 10px solid blue;
    display: flex;
    flex-direction: row;
    margin-left: 25%;
    text-align: center;
`;

export const Cards = styled.div`
  width: 20%;
  height: 200px;
  overflow: hidden;
  border: 2px solid red;s
`;