import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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

getNotes() {
axios.post('http://localhost:3000')
    .then(response => response.data.message)
}


    render(){
        return(
            <div className='container0'>
                <div className ='leftnav'>
        <h1 className='header'> Lambda Notes </h1>

    
        <Link to='/'><div className='button'> View Your Notes </div></Link>
       


        <Link to='/NewNote'><div className='button'> +Create New Note </div></Link>
        </div>
        <div>
            New Note:
            <form onSubmit={this.handleSubmit} action='submit'>
            <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleChange}/>
            <input type="text" name="content" value={this.state.content} placeholder="Note Content" onChange={this.handleChange}/>
            </form>
            <Link to='/' data={{title: this.state.title, content: this.state.content}}><div className='button'>Save</div></Link>
        </div>
       
            </div>
        )
    }
}



