import React from 'react';
import axios from 'axios';


class EditNote extends React.Component {
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
        const id = this.props.match.params.id        
        axios.put(`http://localhost:5050/api/notes/${id}`, this.state)
        .then(response => {
            console.log(response);
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
            <div className='create-note'>
                <div>Edit Note</div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' value={this.state.value} name='title' placeholder='Title!' id='title' onChange={this.handleInput} />                    
                    <input type='text' value={this.state.value} name='note' placeholder='Content!' id='content' onChange={this.handleInput} />
                    <input type='submit' value="Submit" id='submit'/>                
                </form>
            </div>
        )
    }
}



export default EditNote;