import styled from 'styled-components'

export const NoteTitle = styled.div `
 font-size: 1rem ;
 font-family: 'Archivo Black';
 overflow: hidden;
 white-space: nowrap
 text-overflow: ellipsis;
 max-width: 100px ;
 width: 100%
`
export const NoteBody = styled.span ` 
 width: 110px ;
 height: 90px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`
