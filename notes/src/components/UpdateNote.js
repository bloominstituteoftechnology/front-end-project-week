import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateNote } from '../actions/noteActions';


class UpdateNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            textBody:''
        }
    }

    componentDidMount(){
        const { notes, match } = this.props
        const notez = notes.find(item => item.id === Number(match.param.id))
        this.setState(notez)
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.updateNote(this.state)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <h1>Create New Note</h1>
                <input type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="New Title" />
                <textarea type="text" name="textBody" value={this.state.textBody} onChange={this.inputHandler} placeholder="New Content"/>
                <button>Update</button>
            </form>
        )
    }
}

const mapStateToPros = state =>{
    return {
        notes:state.notes
    }
}

export default connect(mapStateToPros, {updateNote})(UpdateNote) 