import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {


    render() {
        return (
            <div class='menu'>
                <h1 class='lambda-notes'>
                    <p>Lambda</p> 
                    <p>Notes</p>
                </h1>
                <div class='menu-buttons'>
                    <Link to='/' class='link'>
                        <div class='button'>
                            View Your Notes
                        </div>
                    </Link>
                    <Link to='/notes/form' class='link'>
                        <div class='button'>
                            + Create New Notes
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu;