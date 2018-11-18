import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    padding: 5%;
    font-size: 3rem;
    font-weight: 900;
  }
`;

export const NotesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
`;

export const Note = styled.div`
 h3 {
    padding: 5%;
    border-bottom: 2px solid gray;
    font-weight: 900;
  };
  div {
    padding: 5%;
  };
`
