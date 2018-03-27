import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { notes } from '../notes';
import { Sample } from './sample-card';

import '../pagestyles/page.css'

class Front extends Component{

    constructor(){
        super();
        this.state = {
            notes: [],
        };
    }

    componentDidMount() {
        this.setState({ Notes: notes })
    }

    render(){
    return(
        <div className="page-container">
        <Link to='/note'>
            <div className="page-title">Your Notes:</div>
            <div className="note-tiles">
            <Sample />
            </div>
        </Link>    
        </div>
    )
  }
}

export default Front;