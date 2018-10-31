import styled from 'styled-components'



export const NoteListContainer = styled.div `
display: flex;
flex-direction: column;
margin: 0 0 0 auto;
    width: 79.5%;
`

export const NoteListDiv = styled.div `
display: flex;
width: 100%;
flex-wrap: wrap;
`

export const NoteListTitle = styled.h2 `
font-size: 150%;
color: #424242;
margin: 0;
padding-top: 40px;
padding-bottom: 18px;
`

export const NoteDiv = styled.div `
border: 1px solid #b7b7b7;
display: flex;
flex-direction: column;
width: 25%;
margin: 1%;
padding: 1.5%;
background: white;
cursor: pointer;
overflow: hidden;
`

export const NoteH2 = styled.h2 `
font-size: 100%;
margin: 0;

`

export const BorderDiv = styled.div `
border-bottom: 1px solid #b7b7b7;
width: 100%;
margin: 5px 0;
`

export const NoteText = styled.div `
margin: 0;
`

export const NoteContentDiv = styled.div `
display: flex;
flex-direction: column;
`
