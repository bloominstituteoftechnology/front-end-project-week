import React from 'react';
import styled from 'styled-components';


const ListItemDiv = styled.div`
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
`
const ListItemH1 = styled.h1`
    border-bottom: 1px solid #CACACA;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    
`
const ListItemP = styled.p`
    font-size: 0.8rem;
    line-height: 1.2;
    display: block;
    overflow: hidden;
    white-space: pre-line;
`


const ListItem = (props) =>{
    const textLength = 144;
    const titleLength = 16;
    const title = props.item.title;
    const text = props.item.textBody;
    return(
        <ListItemDiv>
            <ListItemH1>
            {title.substring(0,titleLength)}
            </ListItemH1>
            <ListItemP>
            {text.substring(0,textLength)} ...
            </ListItemP>
        </ListItemDiv>
    )
}

export default ListItem