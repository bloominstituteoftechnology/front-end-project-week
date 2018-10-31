import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Modal from './Modal';

class ViewNote extends React.Component{
    constructor(){
        super();
        this.state = {
            note : {},
        }
    }
     componentDidMount(){
        const ID = this.props.match.params;
        // console.log(ID)
        this.fetchNoteById(ID.id);//why? how lol?
    }
     fetchNoteById = id => {
        console.log(`https://fe-notes.herokuapp.com/note/get/${id}`)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({note : response.data})
                // console.log("NOTE : ", response.data)
            })
            .catch(error => alert(error))
    }
    
    render(){
        return(
            <div className="view-note">
                <Modal ID={this.props.match.params.id}/>
                <Link to={`/edit/${ this.props.match.params.id}`} >Edit</Link>
                <a href='#'>delete</a>
                <div className="note-section">
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        );
    }
}
 export default ViewNote;