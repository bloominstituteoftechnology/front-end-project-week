import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";
//axios.defaults.withCredentials = true;

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentWillMount = () => {
    localStorage.token ? null : this.props.history.push('/login');
  }

  componentWillMount = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')
    const requestOptions = {
      headers: {
        Authorization: token,
        username
      }
    }
    axios
      .get(`${process.env.REACT_APP_API}/api/notes/`, requestOptions)
      .then(res => {
        //console.log(res.data)
        this.setState({
          notes: res.data.notes
        })
      })
      .catch(err => this.props.history.push('/login'))
  }

  render() {
    return (
      <div className="noteList-container">
        <h3 className="header noteList-header">Your Notes:</h3>
        {this.state.notes.map(note =>
          <div className="float-left mr-3 notes" key={note.id}>
          <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
            <div className="card border-secondary mb-3 note"> 
              <div className="card-body ">
                <h5 className="card-title py-0">{note.title}</h5>
                <hr className="line" />
                <p className="card-text secondary">{note.message}</p>
              </div>
            </div>
          </Link>
          </div>
        )}
      </div>
    )
  }
}
