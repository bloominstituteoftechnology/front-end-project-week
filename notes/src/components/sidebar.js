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
            <div>
                <h1 className="text-white">Lambda Notes</h1>
                <button onClick={this.add}>View Your Notes</button>
                <button onClick={this.add}>+Create New Note</button>
            </div>
        )
    }
}