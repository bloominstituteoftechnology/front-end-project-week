import React, { Component } from 'react';
import Notes from './Note';
import './css/createNote.css';
import { Link } from 'react-router-dom';
// import ListView  from './ListView';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comment: '',
            objectHolder: []
        }
    }
    // componentDidMount() {
    //     this.setState({ newAddedNote: this.state.objectHolder })
    // }
    //start at createNote -> note.js -> listView
    
     handelTodoChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleAddNote = (event) => { 
        event.preventDefault();
         const objectHolder = this.state.objectHolder.slice();
         let newObject = {
             title: this.state.title,
             comment: this.state.comment
         }
         objectHolder.push(newObject);
         
         this.setState({objectHolder: objectHolder, title: '', comment: ''});
         console.log("Object Holder", objectHolder);
    }

    render() {
        return (
            <div className="createNote">
                <h3>Create New Note</h3>
                <form className="formStyle">
                    <div className="form-group">
                        <input type="text"  value={this.state.title} name="title" placeholder="Note Title" onChange={this.handelTodoChange} />
                    </div>
                    <div className="form-group">
                        <textarea rows="21" name="comment" value={this.state.comment} placeholder="Note Content" onChange={this.handelTodoChange}></textarea>
                    </div>
                    <button onClick={this.handleAddNote} className="buttonStyle"><h5>Save</h5></button>
                </form>
                {/* <Notes /> should redirect to ListView page */}
                <Notes listOfNotes={this.state.objectHolder} />
                {/* <ListView listOfViews={this.state.listOfNotes} /> */}
            </div>
        )
    }
}