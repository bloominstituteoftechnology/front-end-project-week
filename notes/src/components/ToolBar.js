import React from 'react';

import {
    SideBar,
    StyledCSV,
    Section,
    Seperator,
    ToolBarLabel,
} from '../styles';

const ToolBar = ({ notes, showMenu, menuToggle}) => {
    return (
        <SideBar showMenu={showMenu}>
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo" />   
            <Section to='/' exact notes="true" onClick={e => menuToggle()}>
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Section to='/select' select="true" onClick={e => menuToggle()}>
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Seperator />
            <ToolBarLabel export="true" />
            <StyledCSV data={notes} onClick={e => menuToggle()}>
                <span className="icon" />
                <span className="title"/>
            </StyledCSV>
            <Seperator />
            <ToolBarLabel account="true"/>
            <Section to='/logout' logout="true" onClick={e => menuToggle()}>
                <span className="icon" />
                <span className="title"/>
            </Section>
        </SideBar>
    );
}

export default ToolBar;
