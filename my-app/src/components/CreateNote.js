import React, { Component } from 'react';
import Notes from './Note';
import './css/createNote.css';


export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comment: '',
            objectHolder: []
        }
    }
    componentDidMount() {
        this.setState({ newAddedNote: this.state.objectHolder })
    }
    //start at createNote -> note.js -> listView
     handelTodoChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleAddNote = (event) => { 
         const objectHolder = this.state.objectHolder;
         let newObject = {
             title: this.state.title,
             comment: this.state.comment
         }
         objectHolder.push(newObject);
         event.preventDefault();
         this.setState({objectHolder: objectHolder, title: '', comment: ''});
         console.log("Object Holder", objectHolder);
    }

    render() {
        return (
            <div className="createNote">
                <h4>Create New Note</h4>
                <form className="formStyle" onSubmit={this.handleAddNote}>
                    <div className="form-group">
                        <input type="text"  value={this.state.title} name="title" placeholder="Note Title" onChange={this.handelTodoChange} />
                    </div>
                    <div className="form-group">
                        <textarea rows="10" name="comment" value={this.state.comment} placeholder="Note Content" onChange={this.handelTodoChange}></textarea>
                    </div>
                    <input type="submit" value="Save" className="buttonStyle" />
                </form>
                <Notes notesState={this.state.objectHolder} />
            </div>
        )
    }
}