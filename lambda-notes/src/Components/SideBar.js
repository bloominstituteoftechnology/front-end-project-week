import React from "react";
import {Link} from "react-router-dom";
import {Buttons, SideBarContainer} from "../Styles/Styles";



const SideBar = () => {
    return(
        <SideBarContainer>
            <h1 className="Lambda">Lambda Notes</h1>
        <Link to="/">
            <Buttons>View Your Notes</Buttons>
        </Link>
        <Link to="/create">
            <Buttons>+Create New Note</Buttons>
        </Link>
        </SideBarContainer>
    );
}

export default SideBar;