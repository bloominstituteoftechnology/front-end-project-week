import React from "react";
import styled from 'styled-components'
import { StyledButton } from './styles'
import { Link }  from "react-router-dom";

const SidebarContainer = styled.div`
    background-color: #fff;
	border-right: 1px solid #ccc;
    min-width: 300px;
    height: 100vh;
    padding: 20px;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	align-items: center;
	z-index: 1;
`

const SidebarHeader = styled.div`
    align-self: flex-start;
	margin-left: 20px;
	margin-top: 15px;
	color: #212121;
`



const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
      <Link to="/">
        <h1>
          Lambda <br /> Notes
        </h1>
        </Link>
      </SidebarHeader>
      <Link to="/notes">
        <StyledButton>View Your Notes</StyledButton>
      </Link>

      <StyledButton>+ Create New Note</StyledButton>
    </SidebarContainer>
  );
};

export default Sidebar;
