import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class SideBar extends React.Component {
  render() {
    return (
        <div className="sideBar">
             <Nav>      
                <NavItem>
                 <h1 className="text-white">Lambda Notes</h1>
                 <button onClick={this}>View Your Notes</button> 
                 <button onClick={this}>+ Create New Note</button>    
                </NavItem>
            </Nav>
          </div>      
          );
        }
    }