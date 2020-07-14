import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

import { getNote, deleteNote } from '../store/actions';
import DeleteView from './DeleteView';

class NoteView extends React.Component {
    
    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
    }

    deleteModal = document.getElementsByClassName('delete-modal');

    render() { 
        return (
            <div>
                <div className="edit-delete-links">
                    <h3 onClick={()=>{this.props.history.push(`/edit/${this.props.noteOnProps['_id']}`)}}>Edit</h3>
                    <h3 onClick={()=>{
                        this.deleteModal[0].style.display ="block"   
                        }}>Delete</h3> 
                </div>
                
                <div className="display-panel">
                    <h2 className="note-title">{this.props.noteOnProps.title}</h2>
                    <p className="note-textBody">{this.props.noteOnProps.textBody}</p>
                </div>
                
                <div className="delete-modal">
                    <div className="delete-modal-popup">
                        <DeleteView {...this.props}
                                    deleteModal={this.deleteModal[0]}/>
                    </div>  
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect(mapStateToProps, { getNote, deleteNote })(NoteView);
