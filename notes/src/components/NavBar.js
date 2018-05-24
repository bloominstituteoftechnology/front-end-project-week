import React from 'react';
import {Navbar, Nav,  NavItem,   NavLink,} from 'reactstrap';
import NoteList from './NoteList';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                
        
                
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/NavBar/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        
                
                        </Nav>
            
                </Navbar>
            </div>
        );
    }
}