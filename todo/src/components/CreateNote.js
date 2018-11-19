import React from 'react';
import axios from 'axios';

class CreateNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            textBody: '',
        }
    }

    inputHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post(`https://fe-notes.herokuapp.com/note/create`, this.state)
        .then(response => {
            this.setState({response})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h3>Create new note</h3>
                <form onSubmit={this.submitHandler}>
                <input
                    name='title'
                    placeholder='enter a title'
                    onChange={this.inputHandler}/>
                <input
                    name='textBody'
                    placeholder='enter some content'
                    onChange={this.inputHandler}/>
                <button type='submit'>Add new note</button>
                </form>
            </div>
            
        )
    }


}

export default CreateNote