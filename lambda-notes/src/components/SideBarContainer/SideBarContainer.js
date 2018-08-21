import React from 'react';
import { SideBarWrapper, SideBarContent, SideBarHeader, MainButtons } from '../ReusableComponents/SideBar';
import RequireAuth from '../Authenticate/RequireAuth';

const SideBarContainer = props => {
    return (
        <div>
            <SideBarWrapper>
                <SideBarContent>
                    <SideBarHeader onClick={() => props.history.push('/')} className='side-bar-header'>Lambda Notes</SideBarHeader>
                    <MainButtons onClick={() => props.history.push('/notes')} className='main-buttons'>View Your Notes</MainButtons>
                    <MainButtons onClick={() => props.history.push('/create')} className='main-buttons'>+ Create New Note</MainButtons>
                    <MainButtons logout onClick={props.logout} className='logout-button'>Logout</MainButtons>
                </SideBarContent>
            </SideBarWrapper>
        </div>
    );
}

export default RequireAuth(SideBarContainer);