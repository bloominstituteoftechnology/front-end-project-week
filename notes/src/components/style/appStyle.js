import styled from "styled-components";

export const AppStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  position: fixed;
  width: 20%;
  background: #D3D2D3;
  padding: 0 2%; 
  height: 100vh;
  z-index: 5;
  overflow-x: hidden;

  h1 {
    padding: 20px 0;
  }

  .link {
    display: block;
    border: 1px solid gray;
    background: #24B8BD;
    color: #FFF;
    margin-bottom: 20px;
    padding: 10px 6%;
    text-align: center
    font-weight: bold;
    font-size: 1.6rem;
    border-radius: 2px;
    transition: background 0.2s ease-out,  color 0.2s ease-out, box-shadow 0.7s ease;

    &:hover {
      box-shadow: inset 0px 0px 1px 2px gray;
    }

    &:active {
      background: #FFF;
      color: #24B8BD;
    }
  }

`;

export const Main = styled.div`
  background: #f2f1f2;
  margin-left: 20%;
  width: 80%;
`;
