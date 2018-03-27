import React, { Component } from 'react';
import allNotes from '../dummyData';


class NoteContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                neededData: [],
            }
        }
    
        componentDidMount() {
            this.setState( {neededData: allNotes.id} );
        }

    render() {
        return (
            <div className="NoteContainer">
                <div className="NoteView">
                    <h6 className="NoteContainerTitle"> {this.props.allNotes.id.title} </h6>
                    <p className="Description"> {this.props.allNotes.id.description} </p>
                </div>
            </div>
        )
    }
}

export default NoteContainer;
