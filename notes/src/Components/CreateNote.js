import React, {Component} from 'react';
import axios from 'axios';

class CreateNote extends Component {
    constructor() {
      super();
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    
    addNote = () => {
        axios.post  (`https://killer-notes.herokuapp.com/note/create`, this.state)
        .then (res => {this.setState({notes: res.data})
        })
        // .catch(console.log('could not add note')
    }

    render(){
        return (
            <div className="group">
                <input 
                    onChange = {this.handleInputChange}
                    placeholder = 'Title'
                    name = 'title'
                    value= {this.state.title}
                />
                <textarea 
                    onChange = {this.handleInputChange}
                    placeholder = 'Text Body'
                    name= 'textBody'
                    value= {this.state.textBody}
                />
                <button 
                    onClick={this.addNote}
                >
                Save
                </button>
            </div>
        );
    }
};

export default CreateNote;