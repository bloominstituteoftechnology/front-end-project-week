import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sideNav" >
            <div className="sideNav__directory" >
                <div className="directory__title" >
                    Lambda Notes
                </div>
                <div className="directory__link" >
                    <Link to="/notes" >
                        <button className="link__button" > View Your Notes </button>
                    </Link>
                </div>
                <div className="directory__link" >
                    <Link to="/newNote" >
                        <button className="link__button" > + Create New Note </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideNav;