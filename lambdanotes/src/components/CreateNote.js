import React, { Component } from 'react';
import './CreateNote.css';
import {connect} from 'react-redux';
import { createNotes } from '../actions';
import { Link } from 'react-router-dom';

class CreateNote extends Component {
    state = {
        title: '',
        body: '',
    };

    inputHandler = e => {
        this.setState({[e.target.title]: e.target.value});
    }

    addNote = () => {
        const {title, body} = this.state;
        const note = {title, body};
        this.props.createNotes(note);
        this.setState( {title: '', body: ''});
    };

    render () {
        return(
            <div className='createNote'>
                <div className= 'cNoteContainer'>
                <h3 className = 'cNoteHeader'>Create New Note:</h3>
                    <input classname= 'cNoteTitle' 
                    type='text' 
                    placeholder='Note Title'  
                    title='title' 
                    value={this.state.title} 
                    onChange={this.inputHandler}
                    />
                    <p/>
                    <input className='cNoteBody'
                    type='text' 
                    placeholder='Note Content' 
                    title='body' 
                    value={this.state.body} 
                    onChange={this.inputHandler} 
                    />
                    <p><button className= 'cNoteButton' onClick={this.addNote}>
                    <Link className = 'cLink' to='/'> Save </Link>
                    </button></p>
                </div>
            </div>            
        )
    } 
}


const mapStateToProps = state => {
    return {
      addingNotes: state.addingNotes,
    };
};
  
  
export default connect ( mapStateToProps, { createNotes }) (CreateNote);
