import React from 'react';
import { Link } from 'react-router-dom';


const styled = {
    textDecoration: 'none',
    color: 'rgb(97, 76, 76)'
}
const SideNav = () => {
    return (
        <div className="sideNav" >
            <div className="sideNav_directory">
                <div className="directory_title">
                    <Link to="/" style={styled}>
                        Lambda Notes
                    </Link>
                </div>
                <div className="directory__links" >
                    <Link to="/">
                        <button className="link_button">View Your Notes</button>
                    </Link>
                </div>
                <div>
                    <Link to="/newNote">
                        <button className="link_button">+ Create New Note</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideNav;