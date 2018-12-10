import React from 'react';
import styled from 'styled-components'

const ListItemDiv = styled.div`
    width: 32%;
    height: 300px
    border: 1px solid #C5C5C5;
    margin-bottom: 30px;
    background-color: white;
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
`
const ListItemP = styled.p`
    font-weight: regular;
    font-size: 20px;
    margin: 0px 30px;
    color: #4A4A4A;
`


const ListItem = (props) =>{
    const maxLength = 144;
    const text = props.item.textBody;
    return(
        <ListItemDiv>
            <ListItemH1>{props.item.title}</ListItemH1>
            <ListItemP>{text.substring(0,maxLength)}</ListItemP>
        </ListItemDiv>
    )
}

export default ListItem