import styled from 'styled-components'



export const NoteContainer = styled.div `
display: flex;
flex-direction: column;
margin: 0 0 0 auto;
width:75%;
`

export const NoteListDiv = styled.div `
display: flex;
width: 100%;
flex-wrap: wrap;
`

export const NoteTitle = styled.h2 `
font-size: 300%;
color: black;
margin: 0;
padding-top: 40px;
padding-bottom: 18px;
text-align:center;
text-decoration:underline;
letter-spacing:25px;
`

export const NoteDiv = styled.div `
border: 2px solid black;
display: flex;
flex-direction: column;
width: 25%;
margin: 1%;
padding: 1.5%;
background: white;
cursor: pointer;
word-wrap:break-word;
`

export const NoteH2 = styled.h2 `
font-size: 150%;
margin: 0;
`

export const BorderDiv = styled.div `
border-bottom: 1px solid black;
width: 100%;
margin: 5px 0;
`

export const NoteText = styled.p `
margin: 0;
`

export const NoteContentDiv = styled.div `
display: flex;
flex-direction: column;
`