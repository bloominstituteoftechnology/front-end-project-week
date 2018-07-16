import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sideNav" >
            <div className="sideNav_directory">
                <div className="directory_title">
                    Lambda Notes
                </div>
                <div className="directory_link">
                    <Link to="/notes">
                        <button className="link_button">View Your Notes</button>
                    </Link>
                </div>
                <div className="directory_link">
                    <Link to="/newNote">
                        <button className="link_button">+ Create New Note</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideNav;