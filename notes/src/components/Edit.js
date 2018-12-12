


import React from 'react';
import axios from 'axios';
import './Edit.css';

class EditNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            title: '',
            body: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    submitNote = e => {
        const editedNote = {title:this.state.title, body: this.state.body}
        this.props.editNote(e, this.props.match.params.id, editedNote);
        this.setState({ title: "", body: "" });
        this.props.history.push("/");
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id)
    }

    fetchNote = id => {
        axios
            .get(`http://localhost:8000/api/notes/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response => console.log(response));
    }


    render() {


        return (
            <div className="container-edit">
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
                            placeholder={this.state.note.title}
                        />
                        <br />
                        <textarea
                            contentEditable='true'
                            className="edit-content"
                            name="body"
                            cols='80'
                            rows='30'
                            value={this.state.body}
                            onChange={this.changeHandler}
                            type="text"
                            placeholder={this.state.note.body}
                        />
                        <br />
                        <button className="update-button">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}



export default EditNote;