import styled from 'styled-components'

export const NoteTitle = styled.div `
 font-size: 1rem ;
 font-family: 'Knewave';
 overflow: hidden;
 white-space: nowrap
 text-overflow: ellipsis;
 max-width: 100px ;
 width: 100%
`
export const NoteBody = styled.span ` 
 width: 110px ;
 border: 3px solid red;
 height: 90px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`
export const NoteNumber = styled.div `
font-style: italic ;
font-family: 'Kranky'
font-size: 0.8rem ;
`