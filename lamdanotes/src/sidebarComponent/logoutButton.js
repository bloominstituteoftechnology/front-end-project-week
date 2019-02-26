import React from 'react';

//props from sbview.js
//handleLogout={this.handleLogout}

const Logout = props => {
    return (
        <button 
            className="sbButtons logoutButton"
            onClick={() => {props.handleLogout()}}
        >
            <img src="https://img.icons8.com/metro/20/FFFFFF/exit.png" alt="logout" />
            <p>Logout</p>
        </button>
    )
}

export default Logout