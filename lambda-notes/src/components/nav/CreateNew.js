import React, { Component } from 'react';
import axios from 'axios';
//import { NavLink } from 'react-router-dom'
// import NoteView from '../NoteView/NoteView'

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }


addNew = event => {
    event.preventDefault();

    const newNote = {
        title: this.state.title,
        textBody: this.state.textBody,
    }

    axios
        .post ('https://fe-notes.herokuapp.com/note/create',newNote)
        .then(response => {
            console.log('ADDING NOTE', response);
            
            this.setState({notes: response.data})
        })
        .catch(error => {
            console.log('ERROR', error)
        });
        

        this.setState({
            title: '',
            textBody: ''
          });

        // this.props.history.push('/');
      

}


handleInputChange = event => {
    // event.preventDefault();
    this.setState ({ [event.target.name]: event.target.value});
     
};



render() {
    return(
        <div>
            <form onSubmit = {this.addNew}>
                <h2>Create New Note:</h2>
                <input
                    onChange = {this.handleInputChange} 
                    placeholder = 'Note Title'
                    value = {this.state.title}
                    name = 'title'
                />
                <input
                    className = 'noteContent'
                    onChange = {this.handleInputChange} 
                    placeholder = 'Note Content'
                    value = {this.state.textBody}
                    name = 'textBody'
                />
                {/* <Redirect to="/"> */}
                <button > Save</button>
                {/* </Redirect> */}
                
               
            </form>

             

             

        </div>
    )
}
}

export default CreateNew;