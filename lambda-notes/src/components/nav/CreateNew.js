import React, { Component } from 'react';
import axios from 'axios';
//import { NavLink } from 'react-router-dom'
// import NoteView from '../NoteView/NoteView'

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }


addNew = event => {
    event.preventDefault();
    this.props.history.push('/');
    window.location.reload();

    const newNote = {
        title: this.state.title,
        content: this.state.content,
    }

    axios
        .post ('http://localhost:9000/api/notes/create',newNote)
        .then(response => {
            console.log('ADDING NOTE', response);
            
            this.setState({notes: response.data})
        })
        .catch(error => {
            console.log('ERROR', error)
        });
        

        this.setState({
            title: '',
            content: ''
          });

        // this.props.history.push('/');
      

}




handleInputChange = event => {
    // event.preventDefault();
    this.setState ({ [event.target.name]: event.target.value});
     
};



render() {
    return(
        <div className = 'createPage'>
            <form className ='create'onSubmit = {this.addNew}>
                <h2 > Create New Note:</h2>
                <input
                    className = 'titleHolder'
                    onChange = {this.handleInputChange} 
                    placeholder = 'Note Title'
                    value = {this.state.title}
                    name = 'title'
                />
                <input
                    className = 'noteContent'
                    onChange = {this.handleInputChange} 
                    placeholder = 'Note Content'
                    value = {this.state.content}
                    name = 'content'
                />
                {/* <Redirect to="/"> */}
                <button onClick = { this.saveHandler} className = 'links' > Save</button>
                {/* </Redirect> */}
                
               
            </form>

             

             

        </div>
    )
}
}

export default CreateNew;