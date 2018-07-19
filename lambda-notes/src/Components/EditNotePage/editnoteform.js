import React, { Component } from 'react';
import Sidebar from '../Sidebar/sidebar';
import { updateNote } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditNoteForm extends Component {
    state = {
     note: {
        _id: 0,
        title: '',
        textBody: ''
     },

      _id: -1,
      title: '',
      textBody: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
    //array.splice(index, howmany, item1, ....., itemX)

    updateHandler = () => {
        const _id = this.props.match.params.id;
        const {title, textBody} = this.state;
        // const nuNotes = this.props.notes.slice();

        // function isindex(note) { 
        //     return note._id == id;
        // }

        // const idFinder = nuNotes.indexOf(nuNotes.find(isindex));
        // nuNotes.splice(idFinder, 1, {id, title, textBody});
        this.props.updateNote({_id, title, textBody});
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const newNote =  this.props.notes.filter((note) => {
            return note._id == id});
        this.setState( {note: newNote[0]} );
        this.setState( {_id: id});
    }

    render () {
        return(
        <div className='create-page-container'>
            <Sidebar />
            <div className="section-container">
                <h1 className="notes-title create"> Edit Note: </h1>
                <form className="create-form">
                    <textarea
                        placeholder={this.state.note.title}
                        onChange={this.handleInputChange}
                        className='title-input'
                        value={this.state.title}
                        name='title'
                        >
                        </textarea>
                     <textarea 
                        placeholder={this.state.note.textBody}
                        onChange={this.handleInputChange}
                        className='content-input'
                        value={this.state.textBody}
                        name='textBody'
                        >
                        </textarea>
                    <Link to={`/note/${this.state._id}`}>
                    <button className='create-button' type='button' onClick={() => this.updateHandler()}> Update </button>  
                    </Link> 
                </form>
             </div>
         </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        notes: state.notes
    };
}

export default connect(mapStateToProps, {updateNote})(EditNoteForm);