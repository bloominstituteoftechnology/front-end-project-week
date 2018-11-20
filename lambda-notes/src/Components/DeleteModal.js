import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    deleteNote = (id) => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then( response => this.setState({notes: response.data}))
        .then ( response => this.props.this.setState({deleteNote:false}))
        .catch(err => console.log(err))
      }
      


    render() {
        return(
            <div className='deleteContainer'>
            <p> Are you sure you want to delete this? </p>
            <div className='deleteButtons'>
            <NavLink activeClassName='selected' to='/home'>
            <button onClick={this.propsclickForAllHandler} className='red' onClick={() => this.deleteNote(this.props.id)} >Delete</button>
            </NavLink>
            <button onClick={this.props.noHandler}>No</button>
            </div>
            </div>
        )
    }
}

export default DeleteModal