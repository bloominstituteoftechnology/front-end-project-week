import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';

//   const Notes = props => {
class Notes extends Component {
    state = {
        title: "",
        textBody: "",
    };
    
    componentDidmount() {
        axios.get(`https://killer-notes.herojuapp.com/note/get/${this.id}`)
        .then(response => {
            this.setState({
                note: response.data,
                title: response.data.title,
                textBody: response.data.textBody
            });
        })
        .catch(err => console.log("Error Delete compDidMount", err));
    }

    handleChange = event => {
        this.setState({...this.state, [event.target.name]: event.target.value} );
        };

    handleDeleteSubmit = event => {
        event.preventDefault();
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
        .then(response => {
            this.state.getNotes();
            this.setState({
                title:"",
                textBody: ""
            });
        })
        .catch(err => console.log("Error in Delete Handle", err))
    }
    render() {
        const { title, textBody, onClick } = this.props;
        return (
            <div className="noteCardBox">
                {/* <Link to="/notes/:noteId">{this.props.title}</Link> */}
                <h1>{title}</h1>
                <p>{textBody}</p>
                <form onSubmit={this.handleDeleteSubmit}>
                    <button onClick={onClick}>Delete Button</button>
                </form>
            </div>
        );
    }
 }
 export default Notes;

//  const note = props.notesList.find(
//          note => note.id === parseInt(props.match.params.noteId, 10)
//      );

//      function handleDelete() {
//          props.handleDeleteNotes(note.id);
//          props.history.push('/notes');
//      }

//  {/* <div className="noteNavButts">
//                 <button 
//                     onClick = {() =>
//                         clickHandler(`/notes/${parseInt(note.id, 10) - 1}`)}>Previous Note</button>
//                 <button
//                     onClick = {() =>
//                         clickHandler('/notes')}>Full Note List</button>
//                 <button
//                     onClick = {() =>
//                         clickHandler(`/notes/${parseInt(note.id, 10) + 1}`)}>Next Note</button>
//             </div> */}
