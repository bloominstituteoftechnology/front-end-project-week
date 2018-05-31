import React from 'react';
import "./SideBar.css"
import { Link } from 'react-router-dom'
import Checkout from "../Checkout/Checkout"


const SideBar = () => {
    return (
    <div className = "sideBar">
        <div className = "logo">
            <h1>Lambda Notes</h1>
        </div>
        <Link to="/home">View Your Notes</Link>
        <Link to="/new">+ Create New Note</Link>
        <Checkout name="Dontation" description="Thank you for the support" amount="10"/>
    </div>
    )
}

export default SideBar;