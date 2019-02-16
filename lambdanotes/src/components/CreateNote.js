import React from 'react';
import axios from 'axios';


class CreateNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {            
            title: '',
            note: '',          
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:5050/api/notes",
            data: this.state
        })
        .catch(err => {
            console.log('in catch', err)
        })       
        this.setState({
            title: '',
            content: ''
        })        
        this.props.history.push('/');
    }

    


    render() {
        return(
            <form onSubmit={this.handleSubmit} className='create-note'>
                <input type='text' value={this.state.value} name='title' onChange={this.handleInput} />                    
                <input type='text' value={this.state.value} name='note' onChange={this.handleInput} />
                <input type='submit' value="Submit" />                
            </form>
        )
    }
}

export default CreateNote;