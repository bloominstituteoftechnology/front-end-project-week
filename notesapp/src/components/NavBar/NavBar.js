import React from 'react'
import {NavBarDiv, NavBarHeader, NavLinkBtn , NavLinkDiv,
    NavButtonText, } from '../../Styles/NavBarStyles'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
    return (
        <NavBarDiv>
            <NavBarHeader>Lambda Notes</NavBarHeader>
            <NavLinkDiv>
            <NavLinkBtn><NavButtonText><Link to="/home" className="a"> View Your Notes</Link></NavButtonText></NavLinkBtn>
            <NavLinkBtn><NavButtonText><Link to="/form" className="a"> + Create New Note</Link></NavButtonText></NavLinkBtn>
            </NavLinkDiv>
        </NavBarDiv>
    )
}

export default NavigationBar