import React from "react";
import { connect } from "react-redux";
import { 
    getNotes, 
    // getNote, 
    addNote, 
    // deleteNote 
} from "../../store/actions";
import "./style.css";

class NoteList extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            tags: [],
            title: "",
            textBody: "",
        }
    }   

    inputHandler = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    submitHandler = (e) => {
    e.preventDefault();
    this.props.fetchingNotes(this.state);
    console.log("inside of this.submitHandler")
    this.setState({
        notes: [],
        loading: false,
        error: false 
        })
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <div className="note-list">
                {this.props.loading ? (
                    <h3>Loading notes...</h3>
                ) : (
                    <div className="notelist">
                    <h1>Here's the notes, ya'll</h1>
                    <h2>Your Notes:</h2>
                        <div className="notelist-area">
                        {this.props.notes.map( (note, index) => {
                                return(
                                    <div className="notelist-header" key={index}>
                                        <div className="note">
                                            <h3>{note.title}</h3>
                                            <p>{note.textBody}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        title: state.title,
        textBody: state.textBody,
        error: state.error,
        loading: state.loading,
    }
};

export default connect(mapStateToProps, { getNotes, addNote } )(NoteList);