import React, { Component } from 'react';
import './NoteContainer.css';
import dummyData from '../dummydata';
import NoteCard from './NoteCard';
import CreateCard from './CreateCard';

class NoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            noteData: []
        };
        }

    componentDidMount() {
        this.setState({ noteData: dummyData})
    }

    render() {
        console.log(this.state);
        return(
            <div className="NoteContainer">
                
                <NoteCard noteData={this.state.noteData}/>
                
            </div>
        )
        
               
    }
}



export default NoteContainer;