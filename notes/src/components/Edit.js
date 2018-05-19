import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
    
    this.state={
        id: '',
        title: '',
        text: ''
    }
}
    componentDidMount() {
        const noteId = this.props.match.params.id;
        const note = this.props.notes.find(item =>item.id===noteId);
        // console.log(note.id);
        this.setState({
            id: note.id,
            title: note.title,
            text: note.text
        });
    }
    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = e => {
        e.preventDefault();
    //  const currentState={
    //     title: this.state.title,
    //       text: this.state.text}
    this.props.updateNote(this.state, this.props.match.params.id)
//  this.setState({
//         title: '',
//         text: ''
//     });
        this.props.history.push("/notes");
    }
    render() {
        console.log(this.state);
        console.log(this.props.history);
        return (
<div>

  <input 
 
type='text'
name="title"
placeholder="Note Title Here"
onChange={this.handleTextInput}
value={this.state.title}

/>

 <input 

type='text'
name="text"
placeholder="Note Text Here"
onChange={this.handleTextInput}
value={this.state.text}

/>
 <button onClick={this.handleSubmit} type="submit">Update Note</button>

    </div>

        )
    }

}

export default withRouter(Edit);