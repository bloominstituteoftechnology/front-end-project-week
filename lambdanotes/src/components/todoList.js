import React, { Component } from 'react';
import Todo from './todo';
import './components.css'

const dummyData = ['hi', 'bye', 'see', 'my', 'eye', 'guy'];

export default class TodoList extends Component {
    constructor () {
        super();
        this.state = {
            todo:dummyData
        }
    }
    render(props) {
        return (
        <div className="ListContainer">
            <Todo cardinfo={this.props.cardinfo}/>
        </div>
        )
    }
}