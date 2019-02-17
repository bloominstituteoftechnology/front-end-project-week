import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Menu = props => {
    return (
        <section className = 'app-menu'>
            <h1>Lambda Notes</h1>

            <div className = 'menu-buttons'>
                <Link to = '/'><button>View Notes</button></Link>

                <Link to = '/new-note'><button>New Note</button></Link>
            </div>
        </section>
    )
}

export default Menu;