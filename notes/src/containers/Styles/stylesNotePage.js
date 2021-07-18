import styled from "styled-components";
export const Main = styled.div`
  width: 1200px;
  margin: 10px;
  padding: 10px;
`;
export const Modal = styled.div`
  display: flex;
  justify-conent: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(114, 144, 144, 0.66);
  font-weight: bold;
`;
export const Container = styled.div`
  flex-directon: column;
  margin: 0 400px 250px;
  padding: 50px 100px;
  border: 1px solid black;
  background: white;
  z-index: 2;
 p {
    text-align: center;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  display: flex;
`;
export const Button = styled.div`
  width: 100px;
  padding: 15px 60px;
  font-size: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
  outline: none;
  background: ${props => props.theme.bg};
`;


export const LinkBtns = styled.button`
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NvLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
