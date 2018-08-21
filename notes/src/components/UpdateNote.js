import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UpdateNote.css';

class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        };
    }

componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id===Number(id));
    this.props.handleSelectNote(note[0]);
}

handleUpdate = () => {
    this.props.handleUpdateNote(this.props.match.params.id)
};

render() {
    return(
    <div>
        <h2> Edit Note</h2>
    <form> 
        <input 
        type = "text" 
        placeholder="Title"
        value = {this.props.selected.title}
        onChange = {this.props.handleTitleUpdate}
        />
        <textarea type = "text"
        placeholder = "Content"
        value = {this.props.selected.body}
        onChange = {this.props.handleBodyUpdate}
        />
        <Link to ="/">
        <button onClick = {this.handleUpdate}>
            Update
        </button>
        </Link>
    </form>
    </div>
    )
}

}

export default UpdateNote; 