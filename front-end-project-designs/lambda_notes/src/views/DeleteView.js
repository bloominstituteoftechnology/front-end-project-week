import React from 'react';
import {connect} from 'react-redux';
import DeleteNote from '../components/DeleteNote';
import {deleteNote}  from '../store/actions';

class EditView extends React.Component {

    handleDeleteNote = event => {
        event.preventDefault();

        this.props.deleteNote(this.props.noteOnProps['_id']);
    }

    render(){
        // console.log(this.props.noteOnProps);
        return (
            <div className="delete-class">
                <DeleteNote {...this.props}
                            note={this.props.noteOnProps}
                            handleDeleteNote={this.handleDeleteNote} />

            </div>
    )}      
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect( mapStateToProps,{deleteNote})(DeleteView);