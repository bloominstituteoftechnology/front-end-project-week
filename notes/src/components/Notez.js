import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class free extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
     text: '',
     title: '',
    }
  }
  componentDidMount() {
    this.getFriends();
  }
  getFriends = () => {
    axios
      .get(`http://localhost:5000/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })  
      .catch(err => {
        console.log(err);
      });
    }
    render() {
        const { note } = this.props;
        return (
            <div>
            {this.state.notes.map(note => {
                return (
                    <div>
<Link to={{pathname: `/note/${note.id}`, state: { currentNote: note}}}>    <div key={note.id}>
                         {note.title} <br />
                        {note.text}
                         </div> </Link>
                    </div>
                )
            })}
        
        </div>
        )}
   
}
export default free;