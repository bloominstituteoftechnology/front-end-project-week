import React from 'react';
import axios from "axios";
import "./SingleNoteView.css"

export default class SingleNoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          note: 0
        };
      }

      componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
      }

       fetchNote = id => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(res => this.setState({ note: res.data }))
          .catch(err => console.log(err));
      }

    render() {
        return (
            <div className="single-note">
                <h3>{this.state.note.title}</h3>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}