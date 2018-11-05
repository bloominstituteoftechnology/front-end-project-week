import React from 'react';

import {
    SideBar,
    StyledCSV,
    Section,
    Seperator,
    ToolBarLabel,
    SVGIcon,
    SectionTitle,
} from '../styles';

const ToolBar = ({ notes, showMenu, menuToggle}) => {
    return (
        <SideBar showMenu={showMenu}>
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo" />   
            <Section to='/' exact notes="true" onClick={e => menuToggle()}>
                <SVGIcon notes="true" />
                <SectionTitle title="Notes" />
            </Section>
            <Section to='/select' select="true" onClick={e => menuToggle()}>
                <SVGIcon select="true" />
                <SectionTitle title="Multi select" />
            </Section>
            <Seperator />
            <ToolBarLabel export="true" />
            <StyledCSV data={notes} onClick={e => menuToggle()}>
                <SVGIcon csv="true" />
                <SectionTitle title="CSV"/>
            </StyledCSV>
            <Seperator />
            <ToolBarLabel account="true"/>
            <Section to='/logout' logout="true" onClick={e => menuToggle()}>
                <SVGIcon logout="true" />
                <SectionTitle title="Logout" />
            </Section>
        </SideBar>
    );
}

export default ToolBar;
