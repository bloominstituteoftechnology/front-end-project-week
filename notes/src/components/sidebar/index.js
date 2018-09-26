import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const SideBaR=styled.div`
width: 25%;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
background-color: #c6c6c6;
min-height: 100vh;
`
const SideBarHeading=styled.h1`
    color:#424242;
    font-weight: Bold;
    margin-left: 10%;
`
const ViewButton=styled.div`
width: 80%;
margin: 0 auto;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
`
const CreateButton=styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
`
const LogOutButton=styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
`

class SideBar extends React.Component{
    viewNotes=()=>{
        this.props.history.push('/notes')
    }
    createNewNote=()=>{
        this.props.history.push('/create');
    }
    logout=()=>{
        localStorage.removeItem('jwt');
        this.props.history.push('/signin');
    }
    render() {
    return(
        <SideBaR>
        <SideBarHeading>Lambda<br/>Notes</SideBarHeading>
        <ViewButton onClick={this.viewNotes}>View Your Notes</ViewButton>
        <CreateButton onClick={this.createNewNote}>+ Create New Note</CreateButton>
        <LogOutButton onClick={this.logout}>Log Out</LogOutButton>
        </SideBaR>
        )
    }
}
export default withRouter(SideBar);