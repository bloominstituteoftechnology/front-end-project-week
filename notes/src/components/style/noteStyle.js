import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin: 50px 10%;
`;

export const NoteAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    width: 30%;
  }
`;

export const NoteStyle = styled.div`
  background: #ffffff;
  border: 1px solid #d3d2d3;
  padding: 5px 10%;
  margin-top: 20px;
  height: 270px;
  transition: all 0.5s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 1px 17px 6px lightgrey;
    transform: scale(1.01);
  }

  &:active {
    background: #eeedee;
  }

  h3 {
    border-bottom: 1px solid #d3d2d3;
    padding: 5px 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.7;
    padding: 5px 0;
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
    word-spacing: 1.5px;
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
  top: 10px;
  right: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &.left {
    right: 100px;
  }
`;
