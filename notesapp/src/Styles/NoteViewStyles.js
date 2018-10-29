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
border: 1px solid black;
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 25%;
margin: 1%;
padding: 1.5%;
background: white;
`

export const NoteH2 = styled.h2 `
font-size: 100%;
margin: 0;

`

export const BorderDiv = styled.div `
border-bottom: 2px solid lightgrey;
width: 100%;
`

export const NoteText = styled.p `
margin: 0
`