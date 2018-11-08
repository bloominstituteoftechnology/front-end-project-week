

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

   

    submitNote = e => {
        this.props.editNote(e, this.state.note._id, this.state);
        this.setState({ title: "", textBody: "" });
        this.props.history.push("/");
      };

    componentDidMount() {
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
                <div className="home-title">
                    <h3>Edit Note:</h3>
                </div>
                <div className='home-body'>
                <form onSubmit={this.submitNote}>
                    <textarea
                        className="edit-title"
                        name="title"
                        size='80'
                        value={this.state.title}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <br/>
                    <textarea
                        className="edit-content"
                        name="textBody"
                        cols='80'
                        rows='30'
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder="Note Content"
                    />
                    <br/>
                    <button className="update-button">Update</button>
                </form>
                </div>
            </div>
        );
    }
}



export default EditNote;