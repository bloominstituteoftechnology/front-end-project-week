import React from 'react';
import { connect } from "react-redux";
import { getNotes, getNote, addNote, deleteNote } from "../../store/actions";
// import "styles.css";

class Form extends React.Component {
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

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState = {
            tags: [],
            title: "",
            textBody: "",
        }
        // this.props.history.push("/");
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
        <div className="note-box">
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.inputHandler}
                />
                <input
                    type="text"
                    name="textBody"
                    placeholder="Note Text"
                    value={this.state.textBody}
                    onChange={this.inputHandler}
                />
                <button onClick={this.props.submitHandler}>Submit</button>
            </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
};

export default connect(mapStateToProps, { getNotes, getNote, addNote, deleteNote } )(Form);