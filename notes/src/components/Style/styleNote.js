import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin: 50px 10%;
`;

export const NoteAlignment = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const NoteStyle = styled.div`
  background: #fff;
  border: 1px solid #d3d2d3;
  padding: 5px 10%;
  margin-top: 20px;
  height: 270px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 1px 17px 6px lightgray;
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
    font-size: 28px;
    line-height: 1.7;
    padding: 5px 0;
  }
`;

export const ViewContainer = styled.div`
  margin-top: 50px;
  padding: 0 5%;

  h3 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
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
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:delete {
    right: 100px;
  }
`;
