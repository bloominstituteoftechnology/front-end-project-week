import React from "react";
import {Button, HeaderContainer} from "../Styles/Styles"

const Header = () => {
   return(
      <HeaderContainer>
         <h1>Lambda Notes</h1>
         <Button>View Your Notes</Button>
         <Button>+Create New Note</Button>
      </HeaderContainer>
   )
}

export default Header