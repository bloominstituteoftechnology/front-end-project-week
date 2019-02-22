import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background: rgb(22, 175, 180);
    color: white;
    border-radius: 1px;
    border: 1px solid gray;
    margin: 1 1em;
    padding: .75em 0em;
    width: 150px;
    font-weight: bold;
    font-size: 12px;
    height: 37px;
`

const Menu = props => {
    return (
        <section className = 'app-menu'>
            <h1>Lambda Notes</h1>

            <div className = 'menu-buttons'>
                <div className = 'menu-button'>
                    <Link to = '/'><Button>View Your Notes</Button></Link>
                </div>
                <div className = 'menu-button'>
                    <Link to = '/new-note'><Button>+ Create New Note</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Menu;