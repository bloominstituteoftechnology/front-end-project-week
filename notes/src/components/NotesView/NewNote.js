import React, { Component }from 'react';

class NewNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            text: ""
        }
    }

    editInput = e => {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
    }

    addNoteHandler = e => {
        e.preventDefault();
        console.log("Add Note handler: " + this.state.text);
        this.props.addNote(this.state);
    }

    render(){
        return (
            <div>
                <h2>Create New Note:</h2>
                <form>
                    <input name="title" placeholder="Note Title" onChange={this.editInput} />
                    <input name="text" placeholder="Note Content" onChange={this.editInput}/>
                    <button onClick={this.addNoteHandler}>Save</button>
                </form>
            </div>
        );
    }
}

export default NewNote;