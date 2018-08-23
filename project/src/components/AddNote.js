import React, { Component } from 'react'
import { addNote } from '../actions'
import { connect } from 'react-redux';

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state = {        
            title: '', 
            note: ''                
        }
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value})

    handleAddNote = () =>{      
        const note = {
            title: this.state.title,
            note: this.state.note
        }
        this.props.addNote(note)
        this.setState({title: '', note: ''})
        window.location.href = "/";
    }

    render(){
        return(
            <div className = "form-wrap">
                <h1 className = "form-title">Create New Note:</h1>
                <input onChange = {this.handleChange} name = "title" value = {this.state.title} placeholder = "Note Title"></input>
                <textarea onChange = {this.handleChange} name = "note" value = {this.state.note} placeholder = "Note Content" rows='30' cols = '100'></textarea>
                <button onClick = {this.handleAddNote} >Save</button>               
            </div>
        )
    }
} 

const mapStatetoProps = (state) => {
    return{
        id: state.selectedId        
    }
}

export default connect(mapStatetoProps, { addNote })(AddNote)