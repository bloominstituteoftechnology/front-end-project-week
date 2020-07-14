import React, { Component } from 'react';
import './index.css'
import Axios from 'axios';
import { connect } from 'react-redux'
import { getNote } from '../../actions/noteActions';

class CreateNote extends Component{
    state = {
        title : '',
        body: ''
    }

    handleInputChange = event =>{
        
        this.setState({[event.target.name] : event.target.value } )
    }

    handleSubmit = ( event ) =>{
        event.preventDefault();
        const { title , body } = this.state;
        const note = { title , body }
        Axios.post('http://localhost:8000/api/notes', note )
            .then(response =>{
                console.log(response)
                 if(response){
                    this.setState({title:'', body : '' })
                    this.props.history.push('/')
                 }
            })
            .catch( error => {

            })
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
                    <textarea name="body"
                    cols="30" rows="30"
                    placeholder='Note Body'
                    onChange={ this.handleInputChange }
                    value = {this.state.body}
                    ></textarea>
                    <div className="submit" onClick ={this.handleSubmit}>Submit</div>
                </div>
            </div>
         );
    }
};

export default connect(null, { getNote })(CreateNote);