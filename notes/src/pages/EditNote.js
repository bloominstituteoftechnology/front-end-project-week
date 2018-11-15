import React, {Component} from "react";

class EditNote extends Component {
    state = {
        note: null,
        id: null,
        newTitle: "",
        newText: "",
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        let note = this.props.notes[id]; //pick out note that corresponds to ID in URL

        this.setState({ //set note to state
            note: note,
            id: id
        }, () => { //set initial values for title and text
            this.setState({
                newTitle: this.state.note.title,
                newText: this.state.note.text
            });
        });
    };

    handleChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.editNote({
            title: this.state.newTitle,
            text: this.state.newText
        }, this.state.id);
    };

    render() {
        return (
            <div>
                {this.state.note ? (
                    <div>
                        <h3>Edit Post</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChangeValue} name="newTitle" type="text" placeholder="Note Title" defaultValue={this.state.note.title}></input>
                            <textarea onChange={this.handleChangeValue} name="newText" placeholder="Note Text" defaultValue={this.state.note.text}></textarea>
                            <input type="submit" value="Update"></input>
                        </form>
                    </div>
                ) : "Note note found."}
            </div>
        );
    };
};

export default EditNote;