import React, { Component } from 'react';

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            name: 'England',
            active: true
        }
    }
    render() {
        return (
            <div className="sideBar">
                <h1 className="text-white">Lambda Notes</h1>
                <button onClick={this}>View Your Notes</button>
                <button onClick={this}>+ Create New Note</button>
            </div>
        )
    }
}