import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="NavBar">
            <h1 className="NavBar__Title">Lambda Notes</h1>
            <Link to="/"><div className="NavBar__Button">View Your Notes</div></Link>
            <Link to="/AddNote"><div className="NavBar__Button">+ Create New Note</div></Link>
            <a href={props.export()} download="LambdaNotesExport.csv"><div className="NavBar__Button">Export Notes to CSV</div></a>
        </div>
    );
};

export default NavBar;