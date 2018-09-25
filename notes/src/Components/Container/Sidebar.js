import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledSidebar } from '../Styles';

export class Sidebar extends Component {
    render() {
        return (
            <StyledSidebar>
                <h1>Lambda Notes</h1>
                <Link className="button navigation" to="/notes">View Your Notes</Link>
                <Link className="button navigation" to="/forms/assemble">+ Create New Note</Link>
            </StyledSidebar>
        )
    }
}
