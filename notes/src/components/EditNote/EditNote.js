import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { editingNote } from '../../actions';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            textBody: '',
         }
    }

    componentDidMount() {
        
        this.setState({
            title: this.props.notes.title,
            textBody: this.props.notes.textBody
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSave = e => {
        e.preventDefault();
        const newObj = {
            id: this.props.notes._id,
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.editingNote(newObj)
        this.props.history.push('/');
    }

    render() { 
        console.log('edit response: ', this.props)
        return ( 
            <div className='mainAreawrapper'>
                <h3 className='headings mainAreaHeading'>Edit Note:</h3>

                <div className='formCreate'>
                    <input className='inputField inputTitle' placeholder='Note Title' name='title' value={this.state.title} type='text' onChange={this.handleChange} />
                    <textarea className='inputField inputText' placeholder='Note Content' name='textBody' value={this.state.textBody} type='text' onChange={this.handleChange} />
                    <button className='saveButton' onClick={this.handleSave}>Save</button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    console.log(' state in edit note: ', state)
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {editingNote}) (EditNote);