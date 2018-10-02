import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin: 50px 10%;
`;

export const NoteAlignment = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  otuline: none;
  position: absolute;
  top: 10px;
  right: 50px;
  fotn-size: 20px;
  cursor: pointer;

  &:hover: {
    transform: scale(1.1);
  }

  &.left {
    right: 100px;
  }
`;
