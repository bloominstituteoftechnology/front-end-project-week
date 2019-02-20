import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background: whitesmoke;
    color: black;
`

const Menu = props => {
    return (
        <section className = 'app-menu'>
            <h1>Lambda Notes</h1>

            <div className = 'menu-buttons'>
                <Link to = '/'><Button>View Notes</Button></Link>

                <Link to = '/new-note'><Button>New Note</Button></Link>
            </div>
        </section>
    )
}

export default Menu;