

//== Application ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

//-- Component -----------------------------------
export default function ActionBar(props) {
    return (
        <nav className="action-bar">
            {Object.keys(props).map(key => createLink(key, props[key]))}
        </nav>
    )
}

function createLink(text, action) {
    if(typeof action === 'function'){
        return <span key={text} onClick={action} children={text} />;
    }
    return <Link key={text} to={action} children={text} />;
}