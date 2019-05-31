import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';

const SideBar = (props) =>{
    
    
    return(
        <Fragment>
        <div className="side-bar">
            <div className="head-div">
                <h1 className="sb-header">Lambda Notes</h1>
                <div className="sb-links">
                    <Link className="sb-link" to="/">View Notes</Link>
                    <Link className="sb-link" to="/add-note">Create Note</Link>
                </div>
            </div>
        
            <div className="sb-input">
                <input type="text" onChange={props.handleSearchInput} name="search" size="35" value={props.search} placeholder="Search By Title"/>
                <button>Search</button>
            </div>
        </div>
        </Fragment>
    )
}

export default SideBar;

