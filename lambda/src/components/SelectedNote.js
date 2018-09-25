import React from "react";
import axios from "axios";

class SelectedNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            toggleUpdate: true,
            toggleDelete: true,
            editTitle: "",
            editContent: ""
        };
    }
    componentDidMount() {
        const noteId = this.props.match.params.id;
        this.getNote(noteId);
    }
    getNote = () => {
        axios
            .get(`https://killer-notes.herokuapp.com/note/get/${note.id}`)
            .then(response => {
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.log(error);
            });
    };
    updateNote = () => {
        const updatedNote = {
            title: this.state.updateTitle,
            text: this.state.updateContent
        }
    };
    axios
        .put(`https://killer-notes.herokuapp.com/note/edit/${noteId}`, updatedNote)
        .then(response => {
            this.setState({ editTitle: "",
                            editContent: ""
                          })
            this.getNote(noteId);
            this.props.handleInfo(response.data);              
        })
        .catch(error => console.log(error))
}

