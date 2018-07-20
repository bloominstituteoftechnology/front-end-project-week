import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { addingNote } from '../../actions';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            text: '',
         }
    }
    

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSave = e => {
        e.preventDefault();
        const newObj = {
            title: this.state.title,
            textBody: this.state.text
        }
        this.props.addingNote(newObj);
        this.props.history.push('/');
    }

    render() { 
        console.log('checking props in createnote: ', this.props)
        return ( 
            <div className='mainAreawrapper createNote'>
                <h3 className='headings mainAreaHeading'>Create New Note:</h3>

                <div className='formCreate'>
                    <input className='inputField inputTitle' placeholder='Note Title' name='title' value={this.state.title} type='text' onChange={this.handleChange} />
                    <textarea className='inputField inputText' placeholder='Note Content' name='text' value={this.state.text} type='text' onChange={this.handleChange} />
                    <button className='saveButton' onClick={this.handleSave}>Save</button>
                </div>
            </div>
         );
    }
}


export default connect(null, { addingNote })(CreateNote);