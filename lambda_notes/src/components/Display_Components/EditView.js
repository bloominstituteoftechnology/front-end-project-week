import React, { Component } from 'react'
import axios from 'axios';

export default class EditView extends Component {
    constructor(props) {
        super(props)
    this.state = {
        note: {},
    }
}


    componentDidMount() {

        const id = this.props.match.params.id;
        this.editNote(id)
    }

 
    editNote = (id) => {
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
        .then( res => {
            this.setState({
            note: res.data,
            })
        })
        .catch( err => {
            throw new Error(err);
        })
        
    }

    render() {
        return (
            <div> 
                edit
                <input  type="text" name="title" value={this.state.title} />
            </div>
        )
    }
}
