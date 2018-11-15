import React, {Component} from "react";

class ViewNote extends Component {
    state = {
        note: null
    };

    componentDidMount() {
        let urlArr = window.location.href.split("/"); //get current URL and split it up by section
        let note = this.props.notes[urlArr[4]]; //pick out note that corresponds to ID in URL

        this.setState({ //set note to state
            note: note
        });
    };

    render() {
        return (
            <div>
                {this.state.note ? ( //only display note after note is set to state, otherwise display loading message
                    <div>
                        <h2>{this.state.note.title}</h2>
                        <p>{this.state.note.text}</p>
                    </div>
                ) : "Loading..."}
            </div>
        );
    };
};

export default ViewNote;