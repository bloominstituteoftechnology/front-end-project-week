import React, { Component } from 'react';
import Notes from './Note';
import './css/listView.css';
import { list } from '../list';


class ListView extends Component {
    constructor(){
        super();
        this.state = {
            listOfNotes: []
        }
    }

    componentDidMount() {
        this.setState({ listOfNotes: list })
    }

    render() {
        console.log('state of note : ', this.state.listOfNotes)
        return (
            <div className="noteArea">
                {/* ListView - list of all notes */}
                <h5>Your Notes</h5>
                <Notes notesState={this.state.listOfNotes} /> 
            </div>
        );
    }
}

export default ListView;