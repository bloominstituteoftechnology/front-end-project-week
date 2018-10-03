import React from 'react';
import axios from 'axios';

class CreateNote extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
                title: '',
                textBody: ''
            }
        }
    }

    handleInputChange = e => {
        this.setState({...this.state, [e.target.name]: e.target.value});
    };
    
    addNote = () => {
        axios.post  (`https://killer-notes.herokuapp.com/note/create`, this.state)
        .then (res => this.setState({notes: res.data}))
        .catch(console.log('could not add note')
    }

    render(){
        return (
            <div className="group">
                <input 
                    type= 'text'
                    onChange = {this.handleInputChange}
                    placeholder = 'Title'
                    name= 'Title'
                    value= {this.state.title}
                />
                <input 
                    type= 'text'
                    onChange = {props.handleInputChange}
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
}

export default CreateNote;