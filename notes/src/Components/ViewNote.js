import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from './Modal';

class ViewNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note : [],
            hidden : 'hidden'
        }
    }

    componentDidMount(){
        const { id }= this.props.match.params;
        this.fetchNoteById(id);
    }

    // componentDidMount(){
    //     const {ID} = this.props.match.params;
    //     this.fetchNoteById(ID);
    //     console.log(ID);
    // }

    fetchNoteById = id => {
        console.log('fetch note', id)
        axios.get(`http://localhost:9000/api/notes/${id}`)
            .then(response => {
                this.setState({note : response.data});
                console.log(response.status, response.data);
            })
            .catch(error => alert(error))
    }

    // fetchNoteById = id => {
    //     console.log(`http://localhost:9000/api/notes/${id}`)
    //     axios.get(`http://localhost:9000/api/notes/${id}`)
    //         .then(response => {
    //             this.setState({note : response.data})
    //         })
    //         .catch(error => alert(error))
    // }

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
                    <p>This render is functional</p>
                </div>
            </div>
        );
    }
}

export default ViewNote;