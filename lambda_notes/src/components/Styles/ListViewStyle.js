import styled from 'styled-components';

export const NoteWrap = styled.div`
    justify-content: center ;
    display: flex ;
    flex-wrap: wrap ;
    background-color: #f2f1f2 ;
    margin-top: 10px ; 
`

export const NoteContent = styled.div`

    width: 200px;
    height: 250px;
    border: 1px solid grey;
    flex-direction: row;
    margin: 5px;
    text-align: center;
    overflow: hidden;
    background-color: #ffffff ;
    
`

export const Title = styled.h1`
    text-align: center;
    font-size: 1.3em;
    color: #292522;
    font-style: none;
`