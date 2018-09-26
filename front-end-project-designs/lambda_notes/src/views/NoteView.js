import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../App.css';

import { getNote } from '../store/actions';

import Note from '../components/Note';

class NoteView extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         note:{}
    //     }
    // }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
    }

    render() {
        // console.log(this.props.noteOnProps['_id']) 
        return (
            <div>
                <div className="edit-delete-links">
                    <h3 onClick={()=>{this.props.history.push(`/edit/${this.props.noteOnProps['_id']}`)}}>Edit</h3>
                    <h3 onClick={event=>{}}>Delete</h3> 
                </div>
                
                <div className="display-panel">
                    <h2 className="note-title">{this.props.noteOnProps.title}</h2>
                    <p className="note-textBody">{this.props.noteOnProps.textBody}</p>

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect(mapStateToProps, { getNote })(NoteView);
