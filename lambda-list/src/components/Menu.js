import React from 'react';
import '../App.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Button = styled.button`
  background: #2ac0c4;
  border-radius: 1px;
  border: 1px solid gray;
  color: white;
  margin: 1 1em;
  padding: .75em 0em;
  width: 150px;
  font-weight: bold;
  font-size: 14px;
//   text-shadow: .1px .1px black;

  
 
`


const Menu = props => {
    return (
        <div className="App-menu">
            <h1>Lambda Notes</h1>
            <div className="menu-buttons">
                <Link to='/'><Button>View Your Notes</Button></Link>
                <Link to='/new-note'><Button>+Create New Note</Button></Link>
            </div>
        </div>
    )
}

export default Menu;