import React, { Component } from 'react';
//import dummyData from '../app/dummyData';
import {connect} from 'react-redux';
import Note from './Note';


class NotesList extends Component {
    // constructor(props) {
    //     super(props) ;
    // }
    render() {
        return(
            <React.Fragment>
            <h2 className="page-title">Your Notes:</h2>
            
            <div className="page-content">
            {this.props.notes.map((mapNote, index) => {
                return(
                    <Note
                        mapNote={mapNote}
                        key={index * 100}
                    />
                )
            })}
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return{
        notes: state.notes
    }
}

export default connect (mapStateToProps) (NotesList);
//export default NotesList;