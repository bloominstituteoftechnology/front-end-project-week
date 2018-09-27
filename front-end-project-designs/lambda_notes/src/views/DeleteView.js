import React from 'react';
import {connect} from 'react-redux';
import DeleteNote from '../components/DeleteNote';
import {deleteNote}  from '../store/actions';
import '../App.css';

class DeleteView extends React.Component {

    handleDeleteNote = event => {
        event.preventDefault();
        this.props.deleteNote(this.props.noteOnProps['_id']);        
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="delete-class">
                {/* <DeleteNote {...this.props}
                            id={this.props.noteOnProps['_id']}
                            handleDeleteNote={this.handleDeleteNote} /> */}
                <h2>Are you sure you want to delete this?</h2>
                <div className="delete-buttons">
                    <button className="delete-yes-button"
                            onClick={
                                this.handleDeleteNote
                            }>Delete</button>
                    <button className="delete-no-button"
                            onClick={()=>
                               this.props.deleteModal.style.display ="none"
                                // this.props.history.push(`/note/${props.id}`)
                            }>No</button>  
                </div>   
            </div>
    )}      
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect( mapStateToProps,{deleteNote})(DeleteView);