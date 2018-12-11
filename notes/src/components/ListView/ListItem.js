import React from 'react';
import styled from 'styled-components'

const ListItemDiv = styled.div`
    width: 32%;
    height: 300px
    border: 1px solid #C5C5C5;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 4px;
`
const ListItemH1 = styled.h1`
    font-weight: bold;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A;
    margin: 30px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid gray;
    width: 80%;
    display: inline-block;
`
const ListItemP = styled.p`
    font-weight: regular;
    font-size: 20px;
    margin: 0px 30px;
    color: #4A4A4A;
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