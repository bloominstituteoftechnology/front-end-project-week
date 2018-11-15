import React from 'react';

const NavSideBar = props=>{

    function appHome(){
        props.history.push('/');
    }

    function appCreateNote(){
        props.history.push('/create-note');
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