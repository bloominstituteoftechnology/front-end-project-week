import styled from 'styled-components' ;

export const NoteWrap = styled.div`
    width: 900px;
    height: 100%;
    display: flex ;
    flex-wrap: wrap ;
    flex-direction: row;
    background-color: #f2f1f2 ;
    margin-left: 10px;
    
`

export const NoteContent = styled.div`
    width: 200px ;
    height: 250px ;
    border: 1px solid grey ;
    flex-direction: row ;
    margin: 5px ;
    text-align: center ;
    background-color: #ffffff ;
    overflow: hidden;


     a {
         text-decoration: none;
     }
    
    
`

export const Title = styled.h1`
    text-align: center;
    font-size: 1.3em;
    color: #292522;
    font-style: none;
    border-bottom: 1px solid lightgray;
    margin: 10px;
`