import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarDiv, SideBarButton, Header } from './StyledComponents';


const SideBar = (props) => {
    return(
        <SideBarDiv className='sidebar'>
            <Header>Lambda Notes</Header>
            <Link to="/notes"><SideBarButton>View Your Notes</SideBarButton></Link>
            <Link to="/create"><SideBarButton>+ Create New Note</SideBarButton></Link>
            <Link to="/notes"><SideBarButton onClick={props.export}>Export to CSV</SideBarButton></Link>
        </SideBarDiv>
    )
}

export default SideBar;