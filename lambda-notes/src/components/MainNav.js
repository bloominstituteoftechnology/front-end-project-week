import React , { Component } from 'react';

import { Link } from 'react-router-dom'


//compoents

export default class MainNav extends Component {
 
    render() {
        return (
            <div>
                <h3>Main Nav</h3>
                <Link to ="/NewNote"><button>+ Create New Note</button></Link>
                
                <Link to ="/"><button>View Your Notes</button></Link>
            </div>
        )
    }
}