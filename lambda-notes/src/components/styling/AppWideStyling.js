import styled from "styled-components";
export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Navigation = styled.div`
  position: fixed;
  width: 20%;
  background: #D3D2D3;
  padding: 0 2rem; 
  height: 100vh;
  h1 {
    padding: 20px 0;
  }
  .navButton {
    display: block;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    margin-bottom: 20px;
    padding: 10px 6%;
    text-align: center
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
export const NotesListContainer = styled.div`
  background: #f2f1f2;
  margin-left: 20%;
  width: 80%;
`;