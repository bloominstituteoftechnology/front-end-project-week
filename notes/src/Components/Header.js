import React from "react";
import {Link} from "react-router-dom";
import {Button, HeaderContainer} from "../Styles/Styles"

const Header = () => {
   return(
      <div className="header">
         <h1>Lambda Notes</h1>
         <Link to="/">
            <Button>View Your Notes</Button>
         </Link>
         <Link to="/create">
            <Button>+Create New Note</Button>
         </Link>
      </div>
   )
}

export default Header