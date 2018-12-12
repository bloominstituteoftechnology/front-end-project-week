import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem';
import SideBar from '../SideBar/SideBar'
import { Link } from 'react-router-dom' 

const ContentDiv =styled.div`
    Width: 100%;
    display: flex;
    background-color: #F3F3F3;
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
    font-weight: bold;
`
const Note = styled (Link)`
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    background: white;
    margin: 0 20px 30px 0;
    text-decoration: none;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 200px;
`

const ListContent =(props) => {
    
    return (
        <ContentDiv>
            <SideBar handleLogout={props.handleLogout} handleClick = {props.handleClick}/>
            <ListContentDiv>
                <ListContentH1>Your Notes: </ListContentH1>
                <ListContentList>
                    {props.list.map( (item,index) =>{
                        return(
                            <Note to ={`/notes/${item._id}`} key = {index}>
                                <ListItem  handleClick = {props.handleClick} getNote={props.getNote} key={index} item={item} />
                            </Note>

                        )
                    })}
                </ListContentList>
            </ListContentDiv>
        </ContentDiv>
    )
    }


export default ListContent