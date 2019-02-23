import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

export class SideBar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'><button>View Your Notes</button></NavLink>
                <NavLink to='/add-note'><button>+ Add Note</button></NavLink>
            </div>
        )
    }

}