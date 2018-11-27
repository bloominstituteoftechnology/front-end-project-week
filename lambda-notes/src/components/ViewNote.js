import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Modal from './Modal';
 
export default class ViewNote extends React.Component{
    constructor(){
        super();
        this.state = {
            note : {},
            hidden : 'hidden',
        }
    }

    componentDidMount(){
        const ID = this.props.match.params;
        this.fetchNoteById(ID.id);
    }

    fetchNoteById = id => {
        console.log(`https://fe-notes.herokuapp.com/note/get/${id}`)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({note : response.data})
            })
            .catch(error => alert(error))
    }

    toggleHidden=()=>{
        if(this.state.hidden === ''){
            this.setState({hidden : 'hidden'})
        }else{
            this.setState({hidden : ''});
        }
    }

    render(){
        return(
            <div className="view-note">
                <Modal
                toggleHidden={this.toggleHidden} 
                hidden={this.state.hidden} 
                ID={this.props.match.params.id}
                refresh={this.props.refresh}
                />

                <Link to={`/edit/${ this.props.match.params.id}`} >Edit</Link>
                <a href='#' onClick={() => this.toggleHidden()}>Delete</a>
                <div className="note-section">
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        );
    }
}
