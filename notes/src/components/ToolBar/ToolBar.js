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

    onSectionClick = (e) => {
        e.preventDefault();
        this.props.menuToggle()
        const name  = e.target.getAttribute('name');
        if (name === 'notes'){
            this.props.selectModeToggle(false)
        }
        if (name === 'select'){
            this.props.selectModeToggle(true)
        }
        if (name === 'logout'){
            this.props.logout();
        }
    }

    render() {
        return (
            <SideBar showMenu={this.props.showMenu}>
                <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo" />   
                <Section 
                    name="notes" 
                    onClick={e => this.onSectionClick(e)}
                    className={this.props.selectMode?'':'active'}
                >
                    <SVGIcon notes="true" name="notes"/>
                    <SectionTitle title="Notes" name="notes" />
                </Section>
                <Section
                    name="select" 
                    onClick={e => this.onSectionClick(e)}
                    className={!this.props.selectMode?'':'active'}
                >
                    <SVGIcon select="true" name="select"/>
                    <SectionTitle title="Multi select" name="select"/>
                </Section>
                <Seperator />
                <ToolBarLabel export="true" />
                <StyledCSV data={this.props.notes} onClick={e => this.onSectionClick(e)}>
                    <SVGIcon csv="true" />
                    <SectionTitle title="CSV"/>
                </StyledCSV>
                <Seperator />
                <ToolBarLabel account="true"/>
                <Section to='/logout' logout="true" name="logout" onClick={e => this.onSectionClick(e)}>
                    <SVGIcon logout="true" name="logout" />
                    <SectionTitle title="Logout" name="logout" />
                </Section>
            </SideBar>
        );
    }
}

export default ToolBar;

