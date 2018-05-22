import React, { Component } from 'react';
import './createNote.css';


export default class Note extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            title: '',
            comment: ''
        }
    }
    //start at create note -> note.js -> listView
     handelTodoChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleAddNote = _ => {
         const { title, comment } = this.state;
         this.setState({id: 0, title: '', comment: ''})
     }

    render() {
        return (
            <div className="createNote">
                <h4>Create New Note</h4>
                <form className="formStyle">
                    <div class="form-group">
                        <input type="text"  value={this.state.title} name="title" placeholder="Note Title" onChange={this.handelTodoChange} />
                    </div>
                    <div class="form-group">
                        <textarea rows="10" name="comment" value={this.state.comment} placeholder="Note Content" onChange={this.handelTodoChange}></textarea>
                    </div>
                    <button onClick={() => this.handleAddNote()}>Save</button>
                </form>
            </div>

        )
    }
}