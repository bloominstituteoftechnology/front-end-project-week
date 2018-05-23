import React, { Component } from 'react';
import './css/createNote.css';


export default class ListView extends Component {
    constructor(){
        super();
    }
    // componentDidMount() {
    //     this.setState({ newAddedNote: list })
    // }
    //start at create note -> note.js -> listView. instead did json--> listView <--> note.js
     handelTodoChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleAddNote = () => { // to clear form?
        //  const { title, comment, id } = this.state;
        //  this.setState({id: 0, title: '', comment: ''});
        //  this.setState = () => {
        //      return Object.assign({}, state, { title: this.props.title, comment: this.props.comment })
        //  }
         
     }

    render(props) {
        console.log("Props: ", this.props.title);
        return (
            <div className="createNote">
                <h4>Edit Note:</h4>
                <form className="formStyle">
                    <div className="form-group">
                        <input type="text"  value={this.props.title} name="title" placeholder="Note Title" onChange={this.handelTodoChange} />
                    </div>
                    <div className="form-group">
                        <textarea rows="10" name="comment" value={this.props.comment} placeholder="Note Content" onChange={this.handelTodoChange}></textarea>
                    </div>
                    <button onClick={() => this.handleAddNote()}>Update</button>
                </form>
            </div>

        )
    }
}