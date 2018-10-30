import React from "react";
import axios from 'axios';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({ note: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.note) {
            return (
                <div className="main-content">
                    <h2>(Loading)</h2>
                </div>
            );
        }
        return(
            <form className="edit-form">
                <h2>Edit Note:</h2>
                <input
                    type="text"
                    placeholder="Note Title"
                    required
                />
                <textarea
                    placeholder="Note Content"
                />
                <button type="submit">Update</button>
            </form>
        );
    }
}