import styled from "styled-components";

//side bar
export const SideBarStyle = styled.div`
  background: #d8d8d8;
  width: 100%;
  height: 1000px;
  margin: 0;
`;

export const HeadingStyle = styled.h1`
  color: #4a4a4a;

  font-weight: bold;
  font: Roboto Bold;
  text-align: left;
  margin-left: 2%;
  font-size: 3rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

//Button
export const Button = styled.button`
  width: 90%;
  color: #ffffff;
  background: #2bc1c4;
  margin: 4%;
  height: 4.2rem;
  border: 0.1rem solid #979797;
  font-weight: bold;
  font-size: 1.6rem;
`;

export const DeleteButton = styled.button`
  width: 90%;
  color: #ffffff;
  background: #d0021b;
  margin: 4%;
  height: 4.2rem;
  border .1rem solid #979797;
  font-weight: bold;
  font-size: 1.6rem; 
`;

export const HeadStyle = styled.h5`
  color: #4a4a4a;
  font: Roboto Bold;
  font-weight: bold;
  text-align: left;
  margin-top: 5%;
  margin-bottom: 2%;
`;

export const TitleStyle = styled.div`
  font: Raleway Medium;
  font-weight: bold;
  margin-left:5%;
  margin-right:5%
  border-bottom: 2px solid #979797;
  text-align: left;
`;

export const BodyStyle = styled.div`
font: Raleway Medium;
  margin-left:5%;
  margin-right:5%
  margin-bottom: 5%;
  text-align: left;
`;

export const NoteBorder = styled.div`
  min-height: 150px;
  border: 2px solid #979797;
  background: white;
  margin-bottom: 10%;
`;

export const MainBack = styled.div`
  background: #f3f3f3;
  text-align: center;
  border: 10px solid #353535;
`;

export const ViewStyle = styled.h5`
  text-align: left;
  font-weight: bold;
  background: white;
  margin: 0;
`;

export const NoteNameStyle = styled.h5`
  text-align: left;
  font-weight: bold;
  margin: 1%;
`;

export const NoteBodyStyle = styled.p`
  text-align: left;
  margin: 1%;
`;

export const EditDelete = styled.span`
  float: right;
  font: Roboto Bold;
  font-weight: bold;
  margin: 1%;'
`;

export const AlertBox = styled.div`
  background: white;
  border: 2px solid #979797;
  height: 175px;
`;

export const AlertText = styled.h6`
  padding-top: 5%;
  padding-bottom: 2%;
`;

export const AlertContainer = styled.div`
  position: relative;
  left: 25%;
  bottom: 25%;
  min-width: 1000px;
  z-index: 10;
`;
