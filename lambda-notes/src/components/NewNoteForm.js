import React from "react";

export default class NewNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            titleText: "",
            contentText: ""
        }
    }

    typingHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            note: {
                tags: [],
                title: this.state.titleText,
                textBody: this.state.contentText
            }
        }, () => {
            this.props.finishAdd(this.state.note, this.props.history);
            // this.props.history.push(`/note/${this.state.note.id}`);
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
            <form className="add-form">
                <h2>Create New Note:</h2>
                <input
                    type="text"
                    placeholder="Note Title"
                    value={this.state.titleText}
                    name="titleText"
                    onChange={this.typingHandler}
                    required
                />
                <textarea
                    placeholder="Note Content"
                    value={this.state.contentText}
                    name="contentText"
                    onChange={this.typingHandler}
                />
                <button type="submit" onClick={this.handleSubmit}>Save</button>
            </form>
        );
    }
}