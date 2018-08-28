import React, { Component } from 'react';
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
                <button className='sbButton button1'>
                    <strong>View Your Notes</strong>
                </button>
                <button className='sbButton'>
                    <strong>+ Create New Note</strong>
                </button>
            </div>
        );
    }
}
