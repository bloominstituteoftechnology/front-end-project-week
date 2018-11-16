import React, {Component} from "react";

class EditNote extends Component {
    state = {
        note: null,
        id: null,
        newTitle: "",
        newText: "",
    };

    componentDidMount() {
        if (this.props.type === "Edit") {
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
        }
    };

    handleChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNote({
            title: this.state.newTitle,
            text: this.state.newText
        }, this.state.id ? this.state.id : "Add");
    };

    render() {
        return (
            <div>
                {this.state.note || this.props.type === "Add" ? (
                    <div>
                        <h3>{this.props.type} Note</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChangeValue} name="newTitle" type="text" placeholder="Note Title" defaultValue={this.state.note ? this.state.note.title : ""}></input>
                            <textarea onChange={this.handleChangeValue} name="newText" placeholder="Note Text" defaultValue={this.state.note ? this.state.note.text : ""}></textarea>
                            <input type="submit" value={this.props.type === "Edit" ? "Update" : "Add"}></input>
                        </form>
                    </div>
                ) : "Note note found."}
            </div>
        );
    };
};

export default EditNote;