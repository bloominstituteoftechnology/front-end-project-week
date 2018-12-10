import styled from 'styled-components'

export const AppWrapper = styled.div` 
  display: flex;
  background-color: #F2F1F2;
`;

export const NavWrapper = styled.div` 
  display: flex;
  /* justify-content: center; */
  width: 20%;
  height: 100vh;
  background-color: #d3d2d3;
  border: 1px solid #C3C2C3;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  margin: 0 1rem;
  /* border: 1px solid green; */
`;

// export const NavLinks = styled.a`
//   display: flex;
//   text-decoration: none;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 2rem;
//   width: 90%;
//   height: 50px;
//   background-color: #26B7BD;
//   color: white;
//   border: 1px solid #B1B7B8;
// `;

export const NotesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65%;
  flex-wrap: wrap;
  margin: 0 auto;
  border: 1px solid green;
`;

export const NotesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 270px;
  margin: 10px;
  border: 1px solid red;
`;

export const Notes =  styled.div`
  /* margin: 10px; */
`;
