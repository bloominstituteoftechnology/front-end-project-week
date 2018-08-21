import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
import { addNote } from '../../actions/index';

class CreateNote extends Component{
    state = {
        title : '',
        textBody: ''
    }

    handleInputChange = event =>{
        
        this.setState({[event.target.name] : event.target.value } )
    }

    handleSubmit = ( event ) =>{
        event.preventDefault();
        const { title , textBody } = this.state;
        this.props.addNote(title,textBody)
        this.setState({title:'', textBody : '' })
        this.props.history.push('/')
    }


    render(){
        return (
            <div className='createNote-container'>
                <div className='note-Header'><h3>Create Note:</h3></div>
                <div className='form-container'>
                    <input type="text"
                    name="title"
                    placeholder='Note Tittle'
                    onChange ={ this.handleInputChange }
                    value = {this.state.title}
                    />
                    <textarea name="textBody"
                    cols="30" rows="30"
                    placeholder='Note Body'
                    onChange={ this.handleInputChange }
                    value = {this.state.textBody}
                    ></textarea>
                    <div className="submit" onClick ={this.handleSubmit}>Submit</div>
                </div>
            </div>
         );
    }
};

export default connect(null,{ addNote })(CreateNote);