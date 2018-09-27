import styled from "styled-components";
export const NotesContainer = styled.div`
  margin: 8rem 10%;
`;

export const NotesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    width: 30%;
  }
`;

export const NoteStyling = styled.div`
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
  padding: 1rem 10%;
  margin-top: 3rem;
  height: 300px;
  h3 {
    border-bottom: 1px solid #d3d2d3;
    padding: 5px 0;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.7;
    padding: 1rem 0;
  }
`;
export const ViewContainer = styled.div`
  margin-top: 50px;
  padding: 0 5%;
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.7;
    margin-top: 30px;
  }
`;
export const Button = styled.button`
  background: none;
  text-decoration: underline;
  border: none;
  outline: none;
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 1.5rem;
  &.left {
    margin-right: 5rem;
  }
`;