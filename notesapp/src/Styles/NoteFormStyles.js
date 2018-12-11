import styled from 'styled-components'

export const NoteFormCont = styled.div `
display: flex;
flex-direction: column;
margin: 0 0 0 auto;
width: 79.5%;
`

export const FormTitle = styled.h2 `
font-size: 150%;
color: #424242;
margin: 0;
padding-bottom: 31px;
padding-top: 33px;
`


export const TitleInput = styled.input `
width: 50%;
height: 40px;
border-radius: 4px;
margin-bottom: 10px;
outline: none;
`

export const TextInput = styled.textarea `
width: 80%;
height: 290px;
border-radius: 4px;
outline: none;
`

export const NewNoteBtn = styled.div`
  background: #24b8bd;
  border: 1px solid #b7b7b7;
  padding: 12px;
  width: 20%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-top: 15px;
  text-align: center;
  `


export const NewNoteButtonText = styled.p `
color: white;
font-size: 100%;
margin: 0;

${NewNoteBtn}:hover & {
  text-decoration: underline;
  cursor: pointer;
}
`
