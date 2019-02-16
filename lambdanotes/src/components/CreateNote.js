import React from 'react';
import axios from 'axios';


import dummyData from '../dummydata';

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
       alert('A note was submitted ' + this.state.title + ' '+ this.state.note)
       //axios.post call
       
       dummyData.push(this.state);
       this.setState({
           title: '',
           content: ''
       })
       event.preventDefault();
       console.log(dummyData);
       this.props.history.push('/');
    }

    componentDidMount(){

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