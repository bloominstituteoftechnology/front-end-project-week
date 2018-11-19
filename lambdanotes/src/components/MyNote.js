import React, { Component } from 'react';
import SingleNote from './styles/SingleNote';
import Button from './styles/NoteButton';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Note extends Component {
    constructor(props){
        super(props);
        this.state={
          note: []
        }
    }

componentDidMount() {
  const id = this.props.match.params.id;
  axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
           this.setState({note: res.data})
        })
        .catch(err => console.log(err));
}
     
    render() {
        console.log(this.state.note)
        return (
            <div className='single-note'>
                <SingleNote>
                <div className="note">
                     <div className="edit">
                       <Button>Edit</Button>
                       <Button>Delete</Button>
                     </div>
                    <h3>{this.state.note.title}</h3>
                    {this.state.note.textBody}
                </div>
                </SingleNote>  
            </div> 
            
        );
    }
}

export default Note;
