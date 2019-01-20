import React from "react";
import { connect } from "react-redux";
import { fetchingNotes, getNote, addNote, deleteNote } from "../../store/actions";
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
    this.setState({
        notes: [],
        loading: false,
        error: false 
        })
    }

    componentDidMount() {
        this.props.fetchingNotes();
    }

    render(){
        return(
            <div>
                <h2>NoteList</h2>
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

export default connect(mapStateToProps, { fetchingNotes, addNote } )(NoteList);