import React from "react";
import {Button} from "../Styles/Styles"

const Header = () => {
   return(
      <div>
         <h1>Lambda Notes</h1>
         <Button>View Your Notes</Button>
         <Button>+Create New Note</Button>
      </div>
   )
}

export default Header