import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

//The sidebar component with buttons linking to view page and create page

const SidebarSection = styled.section`
background-color: #bfbfbf;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const Button = styled.button`
border-radius: 5px; //I don't like square buttons
display: flex;
background-color: #4dc3ff;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
width: 80%;
height: 40px;
`
const Header = styled.header`
margin-left: 25px;
font-size: 2rem;
`

const StyledLink = styled(Link)`
text-decoration: none;
`

//Can not for the life of me, center the text in the button

const Sidebar = props => {
  return (
    <SidebarSection>
      <Header>
        <h1>Lambda Notes</h1>
      </Header>
      <div>
        <StyledLink to="/">
          <Button type = "sidebar-button-view">View Your Notes</Button>
        </StyledLink>
        <StyledLink to="/create">
          <Button type = "sidebar-button-create">+ Create New Note</Button>
        </StyledLink>
      </div>
    </SidebarSection>
  );
};

export default Sidebar;