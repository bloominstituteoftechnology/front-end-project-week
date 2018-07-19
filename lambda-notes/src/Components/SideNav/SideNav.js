import React from 'react';
import { Link } from 'react-router-dom';

const styled = {
    textDecoration: 'none',
    // color: 'rgb(97, 76, 76)'
    color: 'black'
}

const SideNav = () => {
    return (
        <div className="sideNav" >
            <div className="sideNav__directory" >
                <div className="directory__title" >
                    <Link to="/" style={styled} >
                    Lambda Notes
                    </Link>
                </div>
                <div className="directory__links" >
                    <Link to="/" >
                        <button className="link__button" > View Your Notes </button>
                    </Link>
                    <Link to="/newNote" >
                        <button className="link__button" > + Create New Note </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideNav;