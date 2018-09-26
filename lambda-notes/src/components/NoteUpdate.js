import React from 'react';

class NoteUpdate extends Component {

    componentDidMount() {
        localStorage.setItem("location", this.props.location.pathname);
        if (this.props.note.title && this.props.note.textBody) {
            this.setState(
                {
                    _id: this.props.note._id,
                    title: this.props.note.title,
                    textBody: this.props.note.textBody
                },
                () => localStorage.setItem("note", JSON.stringify(this.props.note))
            );
        } else {
            const note = JSON.parse(localStorage.getItem("note"));
            this.setState({
                _id: note._id,
                title: note.title,
                textBody: note.textBody,
            });
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    editNote = () => {
        const editedNote = {
          _id: this.state._id,
          title: this.state.title,
          textBody: this.state.textBody
        };
        this.props.updateNote(this.state._id, editedNote, this.props.history);
      };

    render() {
        return (
            <div>
                <h1>Edit Note</h1>
                <form>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={props.handleInput}
                        value={props.note.title}
                    />

                    <label>Content</label>
                    <input
                        type="text"
                        name="textBody"
                        placeholder="Content"
                        onChange={props.handleInput}
                        value={props.note.textBody}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NoteUpdate;