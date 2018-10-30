import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
//import Edit from './edit'

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          note: null
        };
      }
    
      componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
      }
    
      fetchNote = id => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => {
            this.setState(() => ({ note: response.data }))
            
          })
          .catch(error => console.log(error));
      };
    
      componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.fetchNote(newProps.match.params.id);
        }
      }
      render() {

        if (!this.state.note) {
            return <div> Loading Note...</div>
        }
        
        return (
          <div className="notes-container">
            <div className ='editDelete'>
                 <button onClick= {this.props.deleteNoteButton} id={this.state.note._id}> Delete </button>
                 <Link to={`/note/edit/${this.state.note._id}`}>edit</Link>
                 
                  
               
            </div>
            <h1>{this.state.note.title}</h1>
            <p>{this.state.note.textBody}</p>
          </div>
        );
      }
    }


export default NoteView;