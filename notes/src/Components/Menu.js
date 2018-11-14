import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {


    render() {
        return (
            <div class='menu'>
                <h1 class='lambda-notes'>
                    Lambda Notes
                </h1>
                <div class='menu-buttons'>
                    <button>View Your Notes</button>
                    <button>+ Create New Notes</button>
                </div>
            </div>
        )
    }
}

export default Menu;