import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: ''
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
      .get(`${process.env.REACT_APP_API}/api/notes/${this.props.match.params.id}`, requestOptions)
      .then(res => {
        this.setState({
          title: res.data[0].title,
          message: res.data[0].message
        })
      })
      .catch(err => this.props.history.push('/login'))
  }

  render() {
    return (
      <div className="container">
        <div className="top-content float-right mt-0">
          <Link to={`/edit-note/${this.props.match.params.id}`}><button type="button" className="btn btn-link text-dark underline">Edit</button></Link>
          <button type="button" className="btn btn-link text-dark underline" data-toggle="modal" data-target="#exampleModal">Delete</button>
          <DeleteNote id={this.props.match.params.id} {...this.props}/>
        </div>
        <div className="bottom-content">
          <h3 className='header'>{this.state.title}</h3>
          <p className='notesList'>{this.state.message}</p>
        </div>
      </div>
    )
  }
}
