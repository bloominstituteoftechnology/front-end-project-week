import React, { Component } from 'react';
import Template from './components/Template';

class List extends Component {
    constructor() {
        super();
        this.state = {
            notes = [{
                title: 'Placeholder title',
                content: 'Placeholder content'
            }]
        }

        render() {
            return (
                <ul>
                    {this.state.notes.map(note => {
                        return (
                            <li><Template note={this.state.note}/></li>
                        )
                    })}
                    </ul>
            )
        }
    }
}

export default LIst;

// List holds the state of the app

// Display list using map

// Pass each element of state array of Notes to Template