import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
const DeleteViewDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(220, 220, 220,.6);
    width: 100%;
    height: 109vh;
`
const PromptDiv = styled.div`
    position: absolute;
    z-index: 2;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid Black;
    height: 200px;
    width: 600px;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    flex-wrap:wrap;
`
const PromptP = styled.p`
    font-weight: bold;
    z-index: 2;
`

const ButtonDiv = styled.div`
    margin-top: 50px;
    z-index: 2;
`
const LeftButton = styled.button`
    width: 150px;
    height: 40px;
    margin-right: 20px;
    background-color: #FF0000;
    color: white;
    font-weight: bold;
    opacity: 1;
    z-index: 2;
    border: 1px solid gray;
    cursor: pointer;
`
const RightButton = styled.button`
    width: 150px;
    height: 40px;
    margin-left: 20px;
    color: white;
    font-weight: bold;
    z-index: 2;
    border: 1px solid gray;
    background-color:#2bc1c4;
    cursor: pointer;
`

const DeleteView = (props) =>{
    return (
        <DeleteViewDiv>
            <PromptDiv>
                <PromptP>Are you sure you want to delete this?</PromptP>
                <ButtonDiv>
                    <Link to = '/'><LeftButton onClick = {props.deleteNote}>Delete</LeftButton></Link>
                    <Link to = {`/notes/${props.id}`}><RightButton onClick = {props.handleClick}>No</RightButton></Link>
                </ButtonDiv>
            </PromptDiv>
        </DeleteViewDiv>
    )
}

export default withRouter(DeleteView)