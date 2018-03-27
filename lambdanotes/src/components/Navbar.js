import React from 'react';
import '../styling/navbar.css'

const navBar = () => {
    return (
        <div className= 'sidebar'>
            <div>
                <header className= 'nav-title'>Lambda<br></br>Notes</header>
            </div>
            <div>
                <button classname= 'button'>View Your Notes</button>
            </div>
            <div>
                <button classname= 'button'>+Create New Note</button>
            </div>
        </div>
    )
}

export default navBar;