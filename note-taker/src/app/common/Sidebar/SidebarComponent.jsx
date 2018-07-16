import React from "react";
import styled from "styled-components";
import "../../styles/custom-props.css";
import GeneralBtn from "../GeneralBtn/GeneralBtn";
import { Link } from "react-router-dom";
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
`;
const Header = styled.h1`
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  margin-bottom: 40px;
  line-height: 2.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    margin-bottom: 20px;
  }
`;
const UnstyledLink = styled(Link)``;

const SidebarComponent = props => {
  return (
    <SidebarWrapper>
      <Header>Lambda Notes</Header>
      <ButtonsContainer>
        <Link to="/">
          <GeneralBtn>View your notes</GeneralBtn>
        </Link>
        <Link to = '/create-new'>
          <GeneralBtn> + Create new note</GeneralBtn>
        </Link>
      </ButtonsContainer>
    </SidebarWrapper>
  );
};

export default SidebarComponent;
