import React from 'react';

import {HOME} from '../App';
import {CREATE} from '../App';

const NavSideBar = props=>{

    function appHome(){
        props.setAppState(HOME);
    }

    function appCreateNote(){
        props.setAppState(CREATE);
    }

    return(
        <div>
            <h1>Lambda Notes</h1>
            <button onClick={appHome}>View Your Notes</button>
            <button onClick={appCreateNote}>+Create New Note</button>
        </div>
    )
}

export default NavSideBar;