import React from 'react';
import { withRouter } from 'react-router-dom';
import {SideBaR,SideBarHeading,SideBarButton} from './styledComponents.js';

class SideBar extends React.Component{
    viewNotes=()=>{
        this.props.history.push('/notes')
    }
    createNewNote=()=>{
        this.props.history.push('/create');
    }
    logout=()=>{
        localStorage.removeItem('jwt');
        localStorage.removeItem('id');
        this.props.history.push('/signin');
    }
    render() {
    return(
        <SideBaR>
            <SideBarHeading>Lambda<br/>Notes</SideBarHeading>
            <SideBarButton className='green' onClick={this.viewNotes}>View Your Notes</SideBarButton>
            <SideBarButton className='green' onClick={this.createNewNote}>+ Create New Note</SideBarButton>
            <SideBarButton className='red' onClick={this.logout}>Log Out</SideBarButton>
        </SideBaR>
        )
    }
}
export default withRouter(SideBar);