import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import Axios from 'axios';



class EditNote extends Component {
        state = {
            title : '',
            body: '',
        }
    componentDidMount()  {
        const id = this.props.match.params.id
        let matched = this.props.notes.filter( note => note.id === Number(id))
        const [ note ] = matched
        console.log(note)
        this.setState({ title : note.title, body : note.body })
    }
    handleInputChange = event =>{
        this.setState({[event.target.name] : event.target.value } )
    }

    handleUpdate = ( event ) =>{
        event.preventDefault();
       let updatedNote = { title : this.state.title, body : this.state.body }
       const id = this.props.match.params.id
       Axios.put(`http://localhost:8000/api/notes/${id}`, updatedNote)
            .then( response => {
                if(response){
                    console.log(response.data)
                    this.props.history.push('/')
                }
            })
            .catch( error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className='editNote-container'>
                <div className='note-Header'><h3>Edit Note:</h3></div>
                <div className='form-container'>
                    <input type="text"
                    name="title"
                    placeholder='Note Tittle'
                    onChange={this.handleInputChange}
                    value={this.state.title}/>
                    <textarea
                    name="body"
                    cols="30" rows="30"
                    placeholder='Note Body'
                    onChange = {this.handleInputChange}
                    value={this.state.body}
                    ></textarea>
                    <div className="submit" onClick={ this.handleUpdate }>Update</div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state =>({
    notes : state.notes
})

export default connect(mapStateToProps,null)(EditNote);