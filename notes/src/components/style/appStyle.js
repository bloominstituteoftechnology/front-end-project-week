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
    transition: all 0.2s ease-out;

    &:hover {
      box-shadow: 0px 2px 5px 0px grey;
    }

    &:active {
      box-shadow: inset 0 0 31px 5px cadetblue;
    }
  }

`;

export const Main = styled.div`
  background: #f2f1f2;
  margin-left: 20%;
  width: 80%;
`;
