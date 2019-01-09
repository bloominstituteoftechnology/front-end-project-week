import React from "react";
import {Link} from "react-router-dom";
import {Buttons, HeaderContainer} from "../Styles/Styles";

const Header = () => {
    return(
        <HeaderContainer>
            <h1 className="Lambda">Lambda Notes</h1>
        <Link to="/">
            <Buttons>View Your Notes</Buttons>
        </Link>
        <Link to="/create">
            <Buttons>+Create New Note</Buttons>
        </Link>
        </HeaderContainer>
    );
}

export default Header;