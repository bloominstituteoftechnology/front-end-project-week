import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarDiv, SideBarButton, Header } from './StyledComponents';


const SideBar = () => {
    return(
        <SideBarDiv className='sidebar'>
            <Header>Lambda Notes</Header>
            <Link to="/notes"><SideBarButton>View Your Notes</SideBarButton></Link>
            <Link to="/create"><SideBarButton>+ Create New Note</SideBarButton></Link>
        </SideBarDiv>
    )
}

export default SideBar;