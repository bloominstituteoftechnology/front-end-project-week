import React, {Component} from "react";
import {Link} from "react-router-dom";

class ViewNote extends Component {
    state = {
        note: null
    };

    componentDidMount() {
        let note = this.props.notes[this.props.match.params.id]; //pick out note that corresponds to ID in URL

        this.setState({ //set note to state
            note: note
        });
    };

    render() {
        return (
            <div>
                {this.state.note ? ( //only display note after note is set to state, otherwise display loading message
                    <div>
                        <div>
                            <Link to="#">Edit Note</Link>
                        </div>
                        <h3>{this.state.note.title}</h3>
                        <p>{this.state.note.text}</p>
                    </div>
                ) : "Loading..."}
            </div>
        );
    };
};

export default ViewNote;