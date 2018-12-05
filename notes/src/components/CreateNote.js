import React, { Component } from 'react';

class CreateNote extends Component {
    constructor(props){
    super(props);
    this.state ={
        title: '',
        text: ''
    }    
    }
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }


    //Set path back to default
    submitHandler = e=>{
        e.preventDefault();
        
        this.props.addNote({
            title: this.state.title,
            textBody: this.state.text
        })
        this.props.history.push("/");
}
    
    render(){
        return(
            <div>
                <h2>Create New Note</h2>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='title' value={this.state.title} placeholder='Note Title' onChange={this.inputHandler}/>
                    <input type='text' name='text' value={this.state.text} placeholder='Text' onChange={this.inputHandler}/>
                    <button type='submit'> Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;