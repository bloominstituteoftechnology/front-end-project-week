import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
    render() {
        return (
            <section className="sidebar">
                <h1>Lambda Notes</h1>
                <Link to="/notes">View Your Notes</Link>
                <Link to="/forms/assemble">+ Create New Note</Link>
            </section>
        )
    }
}
