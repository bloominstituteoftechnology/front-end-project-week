import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem';
import SideBar from '../SideBar/SideBar'


const ContentDiv =styled.div`
    Width: 100%;
    display: flex;
    
`
const ListContentDiv = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #F3F3F3;
`
const ListContentList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 125px;
    justify-content: space-between;
    margin: 125px 50px 0px 50px;
`

const ListContentH1 = styled.h1`
    height: 20px;
    font-size: 25px;
    margin: 0px;
    padding: 50px;
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A;
`
const ListContent = (props) =>{
    return (
        <ContentDiv>
            <SideBar handleClick = {props.handleClick}/>
            <ListContentDiv>
                <ListContentH1>Your Notes: </ListContentH1>
                <ListContentList>
                    {props.list.map( (item,index) =>{
                        return(
                        <ListItem key = {index} item = {item}/>
                        )
                    })}
                </ListContentList>
            </ListContentDiv>
        </ContentDiv>
    )
}

export default ListContent