import React from 'react'
import {NavBarDiv, NavBarHeader, NavLinkBtn , NavLinkDiv,
} from '../../Styles/NavBarStyles'

const NavigationBar = () => {
    return (
        <NavBarDiv>
            <NavBarHeader>Lambda Notes</NavBarHeader>
            <NavLinkDiv>
            <NavLinkBtn>View Your Notes</NavLinkBtn>
            <NavLinkBtn>+ Create New Note</NavLinkBtn>
            </NavLinkDiv>
        </NavBarDiv>
    )
}

export default NavigationBar