import React, { Component } from 'react';
import Sidebar from '../Sidebar/sidebar';
import { updateNote } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditNoteForm extends Component {
    state = {
     note: {
        id: 0,
        title: '',
        content: ''
     },

      id: -1,
      title: '',
      content: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
    //array.splice(index, howmany, item1, ....., itemX)

    updateHandler = () => {
        const id = this.props.match.params.id;
        const {title, content} = this.state;
        console.log(this.state);
        console.log(this.props);
        const nuNotes = this.props.notes;
        nuNotes.splice(id, 1, {id, title, content});
        console.log(nuNotes)
        this.props.updateNote(nuNotes);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const newNote =  this.props.notes.filter((note) => {
            return note.id == id});
        this.setState( {note: newNote[0]} );
        this.setState( {id: id});
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
                        placeholder={this.state.note.content}
                        onChange={this.handleInputChange}
                        className='content-input'
                        value={this.state.content}
                        name='content'
                        >
                        </textarea>
                    <Link to={`/note/${this.state.id}`}>
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