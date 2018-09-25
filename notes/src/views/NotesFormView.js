import React from 'react';
import { connect } from 'react-redux';

import { addNote, updateNote } from '../store/actions';
import NotesForm from '../components/NotesForm/NotesForm';

let nextId = 0;

function getNewId() {
  return nextId++;
}

class NotesFormView extends React.Component {
    state={
        note: {
            title: '',
            textBody: '',
            _id: null
        },
        isUpdating: false,
    };

    componentDidMount() {
        console.log(this.props);
        if(this.props.noteToUpdate){
            this.setState({isUpdating: true, note: this.props.noteToUpdate});
        }
    }
    
    

    handleChange = event => {
        if(this.state.isUpdating){
            this.setState({
                note: {
                    ...this.state.note,
                    [event.target.name]: event.target.value,
                }
            });
        } else {
            this.setState({
                note: {
                    ...this.state.note,
                    [event.target.name]: event.target.value,
                    // _id: getNewId()
                }
            });
        }
    }

    handleAddNewNote = event => {
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.props.history.push('/notes');
    }

    handleUpdateNote = () => {
        this.props.updateNote(this.state.note);
        this.props.history.push('/notes');
    }

    render() {
        return (
            <NotesForm 
            {...this.props}
            note = {this.state.note}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            isUpdating={this.state.isUpdating}
            handleUpdateNote={this.handleUpdateNote}
            />
        );
    }
}

const mapStateToProps = state => ({
    noteToUpdate: state.noteToUpdate
});

export default connect(mapStateToProps, { addNote, updateNote })(NotesFormView);