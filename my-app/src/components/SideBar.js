import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarWrap>
      <H1>
        Lambda <br /> Notes
      </H1>
      <NavLink to="/list-view">
        <Button>View Your Notes</Button>
      </NavLink>
      <NavLink to="/create-new">
        <Button>+ Create New Note</Button>
      </NavLink>
    </SideBarWrap>
  );
};

const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  width: 250px;
  background: #d8d8d8;
  border-right: 1px solid #979797;
  box-sizing: border-box;
  height: 100%;
  position: fixed;
`;

const H1 = styled.h1`
  margin: 17px 0;
  line-height: 52px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: #2bc1c4;
  width: 220px;
  height: 60px;
  font-weight: bold;
  font-size: 1rem;
  margin: 7px 0;
  border: 1px solid grey;
`;

export default SideBar;
