import React from 'react';
import { Button } from 'reactstrap';
const SideBar = () => {
    const sideBar = {
        backgroundColor : "#D8D8D8",
        height : "100vh",
        width : "25vw",
    }
    return (
        <div  className ="col-md-3" style ={sideBar} >
            <h1 className ="m-4 font-weight-bold">Lambda Note</h1>
            <Button className = "mt-4 w-100 h-20 align-middle font-weight-bold "  color ="info" >View Your Note</Button>
            <Button className = "mt-4 w-100  h-20 align-middle font-weight-bold " color ="info" >+ Create New Note</Button>
        </div>
    )
}

export default SideBar;