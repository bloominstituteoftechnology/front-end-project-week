// CODE BELOW IS A REDUX TEST #####################################

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

// ########## ^imports^ ################### 

class Test extends Component {

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() { 
        console.log("Test Props:", this.props)
        return (
            <div>
                <h1>REDUX EASTER EGG LAND</h1>
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id}>
                            <h5>{note.title}</h5>
                            <p>{note.textBody}</p>
                        </div>
                    )
                })}  
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("State:", state);
    return {
        notes: state.notes,
        fetching: state.fetching
    }
}
 
export default connect(mapStateToProps, { fetchNotes })(Test);