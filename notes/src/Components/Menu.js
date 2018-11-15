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
                    <div class='button'>View Your Notes</div>
                    <div class='button'>+ Create New Notes</div>
                </div>
            </div>
        )
    }
}

export default Menu;