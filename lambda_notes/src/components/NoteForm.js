import React, { Component } from 'react';
import data from '../demoData';

class NoteForm extends Component {
    constructor(){
        super();
        this.state = {
            inputTitle: '',
            inputBody: '',
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    addNote(e){
        console.log("addNote called!");
        e.preventDefault();
        data.push({
            tags: [],
            title: "YAY!",
            textBody: "New Shit!!",
            id: 6,
        })
    }

    render(){
        console.log(data);
        return (
            <div>
                <h3>Create New Note:</h3>
                <form onSubmit={this.addNote}>
                    <input type="text"
                            name="inputTitle"
                            placeholder="Note Title"
                            value={this.state.inputTitle}
                            onChange={this.handleInput} /><br />
                    <input type="text"
                            name="inputBody"
                            placeholder="Note Content"
                            value={this.state.inputBody}
                            onChange={this.handleInput} /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
    }

 
export default NoteForm;