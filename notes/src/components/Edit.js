

import React from 'react';
import axios from 'axios';
import './Edit.css';

class EditNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            title: '',
            textBody: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

   

    editNote = e => {
        this.props.editNote(e, this.state.note._id, this.state);
        this.setState({ title: "", textBody: "" });
        this.props.history.push("/");
      };

    componentsDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id)
    }
    
    fetchNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => this.setState({ note: response.data }))
        .catch(response => console.log(response));
    }
    
    
    render() {


        return (
            <div className="container">
                <div className="notes-header">
                    <h3>Edit Note:</h3>
                </div>

                <form onSubmit={this.editNote}>
                    <input
                        className="title"
                        name="title"
                        size='80'
                        value={this.state.title}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <br/>
                    <input
                        className="content"
                        name="textBody"
                        size='80'
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder="Note Content"
                    />
                    <br/>
                    <button className="update-button">Update</button>
                </form>
            </div>
        );
    }
}



export default EditNote;