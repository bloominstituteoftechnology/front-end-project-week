import React, { Component } from 'react';
import todo from './todo.js';

const dummyData = ['hi', 'bye', 'see', 'my', 'eye'];

export default class TodoList extends Component {
    constructor () {
        super();
        this.state = {
            todo:dummyData
        }
    }
    render() {
        return (
        <div className="ListContainer">
            <todo dummyData={dummyData}/>
        </div>
        )
    }
}