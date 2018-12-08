import styled from 'styled-components'


export const NoteContainerStyle = styled.div `
display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 padding: 5%;
 width: 80% ;
 justify-content: space-between ;
`

export const NoteContainer = styled.CardDeck`
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 justify-content: space-between ;
`

export const App = styled.div `

 margin: 0 auto ;
 max-width: 1024px;
 width: 100% ;
 height: 500px;
 overflow: scroll;
 box-sizing: border-box;
 display: flex;
 flex-direction: row ;
 background: rgb(241, 240, 240) ;
`
/* ^ Note Container*/