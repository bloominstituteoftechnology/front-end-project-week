import React from 'react';
import axios from 'axios';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          note: []
        };
      }
    
      componentDidMount() {
        const id = this.props.match.params._id;
        this.fetchNote(id);
      }
    
      fetchNote = id => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => 
            this.setState({ note: response.data })
            
          )
          .catch(error => console.log(error));
      };
    
      render() {
        
        return (
          <div className="notes-container">
            < div className ='editDelete'>
                <span>Edit</span>
                <span>Delete</span>
            </div>
            <h1>{this.state.note.title}</h1>
            <p>{this.state.note.textBody}</p>
          </div>
        );
      }
    }


export default NoteView;