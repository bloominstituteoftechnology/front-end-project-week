import React from 'react';
import {connect} from 'react-redux';
import DeleteNote from '../components/DeleteNote';
import {deleteNote}  from '../store/actions';

class DeleteView extends React.Component {

    handleDeleteNote = event => {
        event.preventDefault();
        // console.log(this.props.noteOnProps['_id']);
        this.props.deleteNote(this.props.noteOnProps['_id']);
        this.props.history.push("/");
    }

    render(){
        // console.log(this.props);
        return (
            <div className="delete-class">
                <DeleteNote {...this.props}
                            id={this.props.noteOnProps['_id']}
                            handleDeleteNote={this.handleDeleteNote} />

            </div>
    )}      
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect( mapStateToProps,{deleteNote})(DeleteView);