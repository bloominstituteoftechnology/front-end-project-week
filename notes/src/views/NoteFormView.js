import React from 'react';
import {connect} from 'react-redux';
import {addNewNote, editNote} from '../store/actions'

import NoteForm from '../components/NoteForm/NoteForm';

class NoteFormView extends React.Component {
    state = {
        note: {
            title: '',
            textBody:'',
            _id:'',
        },
        isEditing: false,
    };

    componentDidMount(){
        console.log(this.props);
        if (this.props.noteToEdit) {
            this.setState({ isEditing:true, note: this.props.noteToEdit });
        }
    }

    handleChange = event => {
   this.setState ({ 
        note: {   
            ...this.state.note,
            [event.target.name]: event.target.value, 
            }
        });
    }

    handleAddNewNote = event => {
        event.preventDefault();
        console.log('testing');
        this.props.addNewNote(this.state.note);
        this.props.history.push('/')
    }

    handleEditNote = () => {
        this.props.editNote(this.state.note);
        this.props.history.push('/')
    }

    render(){
        return (
            <NoteForm
            {...this.props}
            note={this.state.note}
            handleAddNewNote={this.handleAddNewNote}
            handleChange = {this.handleChange}
            handleEditNote={this.handleEditNote}
            isEditing={this.isEditing}
            />
        );
    }
}

const mapStateToProps = state => ({
    noteToEdit: state.noteToEdit,
});

export default connect(mapStateToProps,{addNewNote, editNote})(NoteFormView);