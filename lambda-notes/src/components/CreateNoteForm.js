import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import NotesList from '../components/NotesList';


class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesList: [{title: 'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.' },{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},],
                title: '',
                 note: '',
            
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value
        });
    }

    handleSave = event => {
        event.preventDefault();
        let addedNote =  { title: this.state.title, note: this.state.note } 
        let newNotesList = this.state.notesList.slice();
        newNotesList.push(addedNote);
        this.setState({
            notesList: newNotesList,
                title: '',
                 note: '',
            
        });    
    }


    render() {
        return (
            <div>
               <div><NotesList list={this.state.notesList}/></div>     
                <Form>
                    <FormGroup>
                    <Input name="title" onChange={this.handleInput} value={this.state.title} />
                    <Input name="note" type="textarea" onChange={this.handleInput} value={this.state.note} />
                    </FormGroup> 
                    <button onClick={this.handleSave}> Save </button>
                </Form> 
                  
            </div>    
        );
    }
}

export default CreateNoteForm;