import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            noteData: []
        }
    }

    componentDidMount(){
        this.importNote(this.props.match.params.id)
        console.log(`id ${this.props.match.params.id}`)
     }


    importNote = id => {
        axios.get(`http://localhost:3333/notes/${id}`)
           .then(response => {
              console.log(response)
              this.setState({noteData: response.data[0]})
              console.log(`this is state ${this.state.noteData}`)
              })
           .catch(err => console.log(err))
     }

    editNote = e => {
        axios.put(`https://localhost:3333/notes/${this.props.match.params.id}`, this.state)
        .then(response => 
                {this.setState(
                {title: "", text: ""},
            )})
            .catch(err => {console.log(err)})
    }

    handleInputChange = e => {
        this.setState( { [e.target.name]: e.target.value});
    };


    render() {
        console.log(this.state)
        return (
            <div className="Createnote">
            <h2>Edit Note:</h2>
                <form onSubmit={this.editNote}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder={this.state.noteData.title}
                        value={this.state.title}
                        name="title"
                    />
                    <textarea 
                    className="textform"
                        onChange={this.handleInputChange}
                        placeholder= {this.state.noteData.text}
                        value={this.state.text}
                        name="text"
                    />
                    <button type="submit">Update</button>
                </form>
                
            </div>
        )
    }
}