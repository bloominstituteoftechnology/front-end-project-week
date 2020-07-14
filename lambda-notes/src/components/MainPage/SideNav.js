import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionPills from "../material/Sections/SectionPills";
import Fade from "react-reveal";

const Sidebar = styled.div`
  padding: 30px;
  width: 10%;
  display: flex;
  justify-content: left;
  position: fixed;
  background-color: lightgray;
`;

const NavButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  color: white;
  text-decoration: none;
`;

const SideBar = () => {
  return (
    <Fade right>
      <div className='sidebar-container'>
        {/* <h1>
        Lambda
        <br />
        Notes
      </h1> */}
        <SectionPills />
      </div>
    </Fade>
  );
};

export default SideBar;
