import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <Link to= '/'> View Your Notes </Link>
            <Link to= '/newNote'> +Create New Note </Link>
        </div>
    )
}
