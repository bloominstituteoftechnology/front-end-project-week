import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sideNav" >
            Lambda Notes
            <Link to="/notes" >
                <button> View Your Notes </button>
            </Link>
            <Link to="/newNote" >
                <button> +  Create New Note </button>
            </Link>
        </div>
    );
};