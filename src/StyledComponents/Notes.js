import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
 
  text-align: center;
  h1 {
    padding: 5%;
    font-size: 3rem;
    font-weight: 900;
  }
`;

export const NotesWrapper = styled.div`
         display: grid;
         justify-content: center;
         text-decoration: none;
         @media (min-width: 600px) {grid-template-columns: repeat(2, 1fr);}
         @media (min-width: 900px) {grid-template-columns: repeat(3, 1fr);}`;

export const Note = styled.div`
  align-self: center;
  justify-self: center;
  width:21%;
  min-width: 150px;
  height: 150px;
  border: 2px solid #979797;
  background-color: white;
  text-decoration: none;
  padding: 20px;
  margin: 20px;
  color: #4a4a4a;
}
@media(max-width: 500px) {
  .cards {
    width: 90%
  }
`
export const Title = styled.h3`
  padding: 5%;
  border-bottom: 2px solid gray;
  font-weight: 900;
`;

export const TextBody = styled.div`
  padding: 5%
`