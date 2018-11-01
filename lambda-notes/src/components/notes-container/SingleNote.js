import React from 'react';
import EditBar from './EditBar.js';

export default class SingleNote extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    props.fetchNote(id);
  }

  render() {
    if (!props.note) {
      return <div>Loading note information...</div>;
    }
    
    const { title, textBody} = props.note;
    return (
      <div className="note-card">
        <div className="note-title">
          <h2>{title}</h2>
          </div>
          <div className="note-body">
            <p>{textBody}</p>
          </div>
         
          <EditBar deleteNote={props.deleteNote} singleNote = {props.note} id = {props.id}
             />
        </div>
    );
  }
}
/*
import axios from 'axios';
export default class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:null,
    };
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

*/