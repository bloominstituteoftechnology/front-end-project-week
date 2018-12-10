import React, { Component } from 'react';
import {
    SideBar,
    StyledCSV,
    Section,
    Seperator,
    ToolBarLabel,
    SVGIcon,
    SectionTitle,
} from '../../styles';


class ToolBar extends Component {
    render() {
        return (
            <SideBar showMenu={this.props.showMenu}>
                <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo" />   
                <Section to='/' exact notes="true" onClick={e => this.props.menuToggle()}>
                    <SVGIcon notes="true" />
                    <SectionTitle title="Notes" />
                </Section>
                <Section to='/select' select="true" onClick={e => this.props.menuToggle()}>
                    <SVGIcon select="true" />
                    <SectionTitle title="Multi select" />
                </Section>
                <Seperator />
                <ToolBarLabel export="true" />
                <StyledCSV data={this.props.notes} onClick={e => this.props.menuToggle()}>
                    <SVGIcon csv="true" />
                    <SectionTitle title="CSV"/>
                </StyledCSV>
                <Seperator />
                <ToolBarLabel account="true"/>
                <Section to='/logout' logout="true" onClick={e => this.props.menuToggle()}>
                    <SVGIcon logout="true" />
                    <SectionTitle title="Logout" />
                </Section>
            </SideBar>
        );
    }
}

export default ToolBar;

