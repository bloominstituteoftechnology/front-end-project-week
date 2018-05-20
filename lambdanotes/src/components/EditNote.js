import React, { Component } from 'react';
import './EditNote.css';
import {connect} from 'react-redux';
import { editNote } from '../actions';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    state = {
        title: '',
        body: '',
        changeTitle: '',
        changeBody: '',
        toggleForm: false
    };

    updateHandler = e => {
        this.setState({[e.target.title]: e.target.value});
    }

    toggleHandler = () => {
        this.setState({ toggleForm: !this.state.toggleForm });
    };

    render () {
        return(
            <div className='editNote'>
                <div className= 'eNoteContainer'>
                <h3 className = 'eNoteHeader'>Edit Note:</h3>
                    <input classname= 'eNoteTitle' 
                    type='text' 
                    placeholder='Note Title'  
                    title='title' 
                    value={this.state.title} 
                    onChange={this.inputHandler}
                    />
                    <p/>
                    <input className='eNoteBody'
                    type='text' 
                    placeholder='Note Content' 
                    title='body' 
                    value={this.state.body} 
                    onChange={this.inputHandler} 
                    />
                    <p><button className= 'eNoteButton' onClick={this.addNote}>
                    <Link className = 'eLink' to='/'> Update </Link>
                    </button></p>
                </div>
            </div>            
        )
    } 
}


const mapStateToProps = state => {
    return {
      updatingNote: state.updatingNote,
    };
};
  
  
export default connect ( mapStateToProps, { editNote }) (EditNote);
