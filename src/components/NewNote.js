import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import LeftPanal from './LeftPanal';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:'',
            
        };
    }

   

    handleChange = (event) => {
        const name = event.target.name 
        const value = event.target.value
        this.setState({[name]: value});
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('sumbitted')
    }


    render(){
        return(
            <div className='container0'>
                <LeftPanal />
        <div className= 'form'>
            New Note:
            <form onSubmit={this.handleSubmit} action='submit'>
            <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleChange}/>
            <input type="text" name="content" value={this.state.content} placeholder="Note Content" onChange={this.handleChange}/>
            </form>
            <Link to='/'><div className='button'>Save</div></Link>
        </div>
       
            </div>
        )
    }
}



