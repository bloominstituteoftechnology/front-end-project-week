import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../App.css';
import axios from 'axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:9000/api/notes/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
              id: response.data._id,
              title: response.data.title,
              content: response.data.content
            });
          })
          .catch(error => (
            console.error('SERVER ERROR', error)
          ));
    }
    



    handleDelete = () => {
        axios.delete(`http://localhost:9000/api/notes/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('SERVER ERROR', error)
          });
          this.setState({title: '', content: ''});
    }

    

    render() {
        return (
            <div className='note-view'>
                <div className='links'>
                    <Link to='/notes/:id/edit' className='note-view-link'>edit</Link>
                    <Link to='/notes/:id/delete' className='note-view-link' onClick={this.handleDelete}>delete</Link>
                </div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default NoteView;