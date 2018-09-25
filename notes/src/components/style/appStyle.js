import styled from 'styled-components';

export const AppStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh
`

export const Navigation = styled.div`
  width: 20%;
  background: #D3D2D3;
  padding: 0 2%; 

  h1 {
    padding: 20px 0;
  }

  .link {
    display: block;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    margin-bottom: 20px;
    padding: 10px 6%;
    text-align: center
    font-weight: bold;
    font-size: 1.6rem;
  }
`

export const Main = styled.div`
  background: #F2F1F2;
  width: 80%;
`