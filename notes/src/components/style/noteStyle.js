import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin: 50px 10%; 
`

export const NoteAlign = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NoteStyle = styled.div`
  background: #FFFFFF;
  width: 90%;
  
  border: 1px solid #D3D2D3;
  padding: 5px 10%;
  margin-top: 20px;

  h3 {
    border-bottom: 1px solid #D3D2D3;
    padding: 5px 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.7;
    padding: 5px 0;
  }
`

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
`


export const Button = styled.button`
  background: none;
  text-decoration: underline;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 1.5rem;

  &.left {
    right: 90px;
  }
`

