import React, { Component } from 'react';
import './NoteContainer.css';
import dummyData from '../dummydata';
import NoteCard from './NoteCard';

class NoteContainer extends Component {
    state = {
        noteData: []
    };


    componentDidMount() {
        this.setState({ noteData: dummyData})
    }

    render() {
        console.log(this.state);
        return(
            <div className="Notes">
                {this.state.noteData.map((note, index) => {
                    return (
                    <NoteCard key={index} noteData={this.state.noteData}/>
                    );
                })}
            </div>
        )
        
               
    }
}



export default NoteContainer;