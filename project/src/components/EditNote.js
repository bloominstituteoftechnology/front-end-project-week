import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { editNote } from '../actions'
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {        
            title: '', 
            note: ''                
        }
    }
    handleChange = e => this.setState({[e.target.name]:e.target.value})

    handleEditNote = () =>{
        const note = {
          title: this.state.title,
          note: this.state.note
        }
        this.props.editNote(this.props.id, note)
        this.setState({title: '', note: ''})
    }

    render(){
        return(
            <div className = "form-wrap">
                <h1 className = "form-title">Edit Note:</h1>
                <input onChange = {this.handleChange} name = "title" value = {this.state.title} placeholder = "Note Title"></input>
                <textarea onChange = {this.handleChange} name = "note" value = {this.state.note} placeholder = "Note Content" rows='30' cols = '100'></textarea>
                <Link to = "/" onClick = {()=>this.handleEditNote()} ><button>Update</button></Link>                
            </div>
        )
    }
} 

const mapStatetoProps = (state) => {
    return{
        id: state.selectedId        
    }
}

export default connect(mapStatetoProps, { editNote })(EditNote)