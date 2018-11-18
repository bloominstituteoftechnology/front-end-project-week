import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoteWrapper = styled.div`
  padding: 5%;
  width: 80%;
  h3 {
    font-weight: 900;
    font-size: 2.5rem;
    padding: 5%;
  };
  div {
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
    padding-left: 5%;
    font-size: 2rem;
  };
`

export const EditLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`
