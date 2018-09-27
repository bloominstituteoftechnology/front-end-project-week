import React from 'react';
import {connect} from 'react-redux';
import {getNotes,deleteNote,setEditNote} from '../store/actions';
import Note from '../components/Note/Note';
// import DeleteModal from '../components/DeleteModal/DeleteModal';

class NoteView extends React.Component {

constructor(props){
    super(props);
    this.state = {
        view:false,
    }

    
}

toggle = () => {
    this.setState({
        view: !this.state.view
    });
}

    componentDidMount() {
        if (this.props.notesList.length === 0) {
            this.props.getNotes();
        }
    }

   

    handleDeleteNote = noteId => {
        this.props.deleteNote(noteId);
    }

    goToEditNoteForm = (event, id) => {
        event.preventDefault();
        this.props.setEditNote(id);
        this.props.history.push('/CreateNote');
    }

    render() {
        return (
            <Note
            {...this.props}
            notesList={this.props.notesList}
            isLoading={this.props.isLoading}
            handleDeleteNote={this.handleDeleteNote}
            goToEditNoteForm={this.goToEditNoteForm}
            view={this.state.view}
            toggle={this.toggle}
            

            />          
        );
        
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps, {getNotes,deleteNote,setEditNote})(NoteView);

// constructor(props){
//     super(props);
//     this.state = {
//         view:false,
//     }
// }

// isOpen = event => {
//     event.preventDefault();
//     this.setState({
//         pressed: !this.state.pressed
//     });
// }

// toggle = () => {
//     this.setState({
//         view: !this.state.modal
//     });
// }


// isOpen = event => {
//     event.preventDefault();
//     this.setState({
//         view: !this.state.view
//     });
// }