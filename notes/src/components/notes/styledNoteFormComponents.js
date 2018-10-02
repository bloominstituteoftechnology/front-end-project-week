import styled from 'styled-components';

const NoteFormPage=styled.div`
background-color:#ddd;
width: 75%;
`
const NoteFormHeading=styled.h2`
text-align: left;
color:#424242
margin-left: 5%;
margin-top: 70px;
`
const NoteForm=styled.form`
width: 92.5%;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 5%;
`
const NoteFormButton=styled.button`
width: 30%;
margin-top: 20px;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
border-color:transparent;
outline:none;
font-size:16px;
&:hover{
    opacity:0.85;
}
`
const NoteFormInput=styled.input`
width: 55%;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
outline:none;
border-radius:4px;
border-color:transparent;
border:1px solid #A9A9A9;
`
const NoteFormTextArea=styled.textarea`
height: 400px;
width: 96%;
margin-top: 20px;
margin-bottom: 20px;
outline:none;
border-radius:4px;
border-color:transparent;
border:1px solid #A9A9A9;
`
export{NoteFormPage,NoteFormHeading,NoteForm,NoteFormButton,NoteFormInput,NoteFormTextArea};