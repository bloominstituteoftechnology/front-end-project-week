import React, {Component} from 'react';
import axios from 'axios';

class EditNote extends Component {
    constructor(props) {
      super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    componentDidMount = () => {
        console.log('before get', this.state)
        axios
        .get(`http://localhost:8000/api/notes`)
        .then(res => {
            let notes = res.data;
            let note = notes.filter(note => {
                if (this.props.match.params.id === note.id){
                    return note;
                }
            }) [0];
        })
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    updateNote = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const newNote = {
            title: this.state.title,
            textBody: this.state.textBody,
        };
        axios
          .put  (`https://localhost:8000/api/notes/${id}/`, newNote)
          .then (res => this.setState({notes: res.data}))
          .then (
                this.setState({ 
                    title: '',
                    textBody: '',
                    _id: this.props.id
                }) )
            .then(() => {this.props.history.push('/')})
          .catch(err => console.log(err));
        
    };

    render(){
        return (
            <div className="group">
                <form onSubmit={this.updateNote} >
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
                    <button type='submit' >Save</button>
                </form>
            </div>
        );
    }
};

export default EditNote;

