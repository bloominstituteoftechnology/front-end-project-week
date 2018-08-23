import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar.js';
import './AddNote.css';
import { connect } from 'react-redux';

import axios from 'axios'

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes:[],
            title:"",
            content:""
         }
    }

    addNote = event => {
        // event.preventDefault();
        const addone = { title: this.state.title, content: this.state.content };
        
        axios 
          .post(`${process.env.REACT_APP_API}/notes`, addone)
          .then(response => {
            this.setState({ title: '', content:''});
            this.setState({notes: response.data})
            this.props.handleRefresh();
          })
    
          .catch(error => console.log(error));
        }



    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
        return e.target.value;
    }

    render() { 
        return (  
            <div className="body">
                <SideBar />
                <div className="sideBar_pop create">
                    <h1>Create New Note</h1>
                    <input onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                    <textarea onChange={this.handleInputChange} name="content" cols="99" rows="10" placeholder="Note Content"></textarea>
                    <a href="/">
                    <div className='myButton' onClick={() => this.addNote({title: this.state.title, content: this.state.content })}>Save</div>
                    </a>



                </div>
            
            </div>
        );
    }
}



 
export default AddNote