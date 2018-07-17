import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { editingNote } from '../../actions';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            text: '',
         }
    }

    componentDidMount() {

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSave = e => {
        e.preventDefault();
        const newObj = {
            title: this.state.title,
            text: this.state.text,
            id: Math.random(),
        }
        this.props.history.push('/');
    }

    render() { 
        console.log('edit response: ', this.props)
        return ( 
            <div className='mainAreawrapper'>
                <h3 className='headings mainAreaHeading'>Edit Note:</h3>

                <div className='formCreate'>
                    <input className='inputField inputTitle' placeholder='Note Title' name='title' value={this.state.title} type='text' onChange={this.handleChange} />
                    <input className='inputField inputText' placeholder='Note Content' name='text' value={this.state.text} type='text' onChange={this.handleChange} />
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