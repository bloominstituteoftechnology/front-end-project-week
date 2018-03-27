import React, { Component } from 'react';



class NoteContainer extends Component {

    render() {
        return (
            <div className="NoteContainer">
                <div className="NoteView">
                    <h6 className="NoteContainerTitle"> {this.props.location.state.currentView.title} </h6>
                    <p className="Description"> {this.props.location.state.currentView.description} </p>
                </div>
            </div>
        )
    }
}

export default NoteContainer;
