import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className='sideBar'>
                <p className='sbTitle'>
                    <strong>Lambda Notes</strong>
                </p>
                <Link to='/'>
                    <button className='sbButton button1'>
                        <strong>View Your Notes</strong>
                    </button>
                </Link>
                <Link to='/create'>
                    <button className='sbButton'>
                        <strong>+ Create New Note</strong>
                    </button>
                </Link>
            </div>
        );
    }
}
